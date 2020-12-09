App = {
  web3Provider: null,
  contracts: {},

  init: async () => {
    // Load pets.
    $.getJSON('../data.json', data => {
      var buildingRow = $('#buildingRow');
      var buildingTemplate = $('#buildingTemplate');

      for (i = 0; i < data.length && i <= 30; i ++) {
        buildingTemplate.find('.panel-title').text(`Building #${data[i].building.id}`);
        buildingTemplate.find('.building-location').text(data[i].building.location);
        buildingTemplate.find('.conformity-certificate').text(data[i].building.batteries[0].operatingPermit);
        buildingTemplate.find('.operating-permit').text(data[i].building.batteries[0].columns.age);
        buildingTemplate.find('.btn-homologue').attr('data-id', data[i].building.id);

        buildingRow.append(buildingTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: () => {
    $.getJSON('QualityTest.json', data => {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var QualityTestArtifact = data;
      App.contracts.QualityTest = TruffleContract(QualityTestArtifact);
    
      // Set the provider for our contract
      App.contracts.QualityTest.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.markSecure();
    });

    return App.bindEvents();
  },

  bindEvents: () => {
    $(document).on('click', '.btn-homologue', App.handleHomologue);
  },

  markSecure: () => {
    var qualityInstance;

    App.contracts.QualityTest.deployed().then(instance => {
      qualityInstance = instance;
      let buildingIds = [];

      $.getJSON('../data.json', _data => {
        for (let i = 0; i < _data.length && i <= 30; i++) {
          console.log(_data[i].building.id)
          buildingIds.push(_data[i].building.id);
        }
      });

      console.log(buildingIds);

      return qualityInstance.getBuildings.call(buildingIds, 0);
    }).then(buildings => {
      for (i = 0; i < buildings.length; i++) {
        if (buildings[i].address !== '0x0000000000000000000000000000000000000000') {
          console.log("here")
          $('.panel-building').eq(i).find('button').text('Success').attr('disabled', true);
        }
      }
    }).catch(err => {
      console.log(err.message);
    });
  },

  handleHomologue: event => {
    event.preventDefault();
    
    let qualityInstance;
    let buildingId = parseInt($(event.target).data('id'));
    let card = $(event.target).parent();

    let isTestPassing = false;
    let _operatingPermit = "";
    let _conformityCertificate = "";
    let _buildingAddress = "";

    if (validate(card)) {
      isTestPassing = true;
      _operatingPermit = card.children('.operating-permit').val();
      _conformityCertificate = card.children('.conformity-certificate').val();
      _buildingAddress = card.children('.building-location').text();
    }

    if (isTestPassing) {
      web3.eth.getAccounts((error, accounts) => {
        if (error) { console.log(error); }

        let account = accounts[0];

        App.contracts.Adoption.deployed().then(instance => {
          qualityInstance = instance;

          // Execute adopt as a transaction by sending account
          return qualityInstance.secure(buildingId, isTestPassing, _operatingPermit, _conformityCertificate , _buildingAddress, {from: account});
        }).then(result => {
          return App.markSecure();
        }).catch(err => {
          console.log(err.message);
        });
      });
    }

    else {
      // if (card.children('door-tested:checked') != null) {
      //   console.log('true');
      // } else { console.log('false') }
      console.log()
      alert("The Field blabla is required for securing a building")
      console.log($(event.target).attr('data-id'));
      console.log("some fields are not valid");
    }
  }
};

function validate(card) {  
  if (card.children('.door-tested').is(":checked") && card.children('.cable-tested').is(":checked") && card.children('.break-tested').is(":checked")) {
    if (card.children('.operating-permit').val().split(" ")[0] != "") {

      if (card.children('.conformity-certificate').val().split(" ")[0] != "") {

        return true;
      }
    }
  }
}

$(() => {
  $(window).load(() => {
    App.init();
  });
});
