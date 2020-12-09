const QualityTest = artifacts.require('QualityTest');

module.exports = function (deployer) {
  deployer.deploy(QualityTest);
};
