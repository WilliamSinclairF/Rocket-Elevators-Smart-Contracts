const QualityTest = artifacts.require('QualityTest');
const MaterialProvider = artifacts.require('MaterialProvider');

module.exports = function (deployer) {
  deployer.deploy(QualityTest);
  deployer.deploy(MaterialProvider);
};
