App = {
  web3Provider: null,
  contracts: {},

  init: async () => {
    // Load pets.
    $.getJSON('../pets.json', data => {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async () => {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: () => {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: () => {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: () => {
    /*
     * Replace me...
     */
  },

  handleAdopt: event => {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(() => {
  $(window).load(() => {
    App.init();
  });
});
