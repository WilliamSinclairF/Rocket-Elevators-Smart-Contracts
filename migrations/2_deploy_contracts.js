const MyStringStore = artifacts.require("MyStringStore");
const MyArrayStore = artifacts.require("MyArrayStore");
const QualityTest = artifacts.require("QualityTest");

module.exports = deployer => {
  deployer.deploy(MyArrayStore);
  deployer.deploy(MyStringStore);
  deployer.deploy(QualityTest);
};