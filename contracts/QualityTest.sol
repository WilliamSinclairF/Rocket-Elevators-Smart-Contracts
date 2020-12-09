// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.8.0;

contract QualityTest {
  uint public testCount = 0;
  
    struct Test {
    // Building
    uint id;
    bool testPassed;
    string buildingAddress;
    // Battery
    string operatingPermit;
    // Column
    string conformityCertificate;
    // Elevator
    string elevatorDoorTest;
    string elevatorCableTest;
    string elevatorBreakTest;
}

    event TestCreated(
    // Building
    uint id,
    bool testPassed,
    string buildingAddress,
    string operatingPermit,
    string conformityCertificate
  );

  mapping(uint => Test) public tests;

  Test[] public testList;

  function createTest(
      bool _testPassed, 
      string memory _buildingAddress, 
      string memory _operatingPermit, 
      string memory _conformityCertificate, 
      string memory _elevatorDoorTest, 
      string memory _elevatorCableTest, 
      string memory _elevatorBreakTest
      ) public {
    testCount ++;
    testList.push(Test(
        testCount,
        _testPassed, 
       _buildingAddress, 
       _operatingPermit, 
       _conformityCertificate, 
       _elevatorDoorTest, 
       _elevatorCableTest, 
       _elevatorBreakTest));
    emit TestCreated(testCount, _testPassed, _buildingAddress, _operatingPermit, _conformityCertificate);
  }
    function getTests() public view returns(Test[] memory) {
    return testList;
}

}