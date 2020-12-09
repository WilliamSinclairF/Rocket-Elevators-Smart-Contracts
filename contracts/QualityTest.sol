// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.8.0;

contract QualityTest {
    Building[] public buildingList;
  
    struct Building {
        // Building
        uint id;
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

    event BuildingCreated(
        // Building
        uint id,
        bool testPassed,
        string buildingAddress,
        string operatingPermit,
        string conformityCertificate
    );

    function createQualityTest(
        uint _id,
        string memory _buildingAddress,
        string memory _operatingPermit,
        string memory _conformityCertificate,
        string memory _elevatorDoorTest,
        string memory _elevatorCableTest,
        string memory _elevatorBreakTest
    ) public {

        string memory empty = "";

        require (
            !doesExist(_id) &&
            !equal(_buildingAddress, empty) &&
            !equal(_operatingPermit, empty) &&
            !equal(_conformityCertificate, empty) &&
            !equal(_elevatorDoorTest, empty) &&
            !equal(_elevatorCableTest, empty) &&
            !equal(_elevatorBreakTest, empty)
        );

        buildingList.push(
            Building({
                id: _id,
                buildingAddress: _buildingAddress,
                operatingPermit: _operatingPermit,
                conformityCertificate: _conformityCertificate,
                elevatorDoorTest: _elevatorDoorTest,
                elevatorCableTest: _elevatorCableTest,
                elevatorBreakTest: _elevatorBreakTest
            })
        );

        emit BuildingCreated(_id, true, _buildingAddress, _operatingPermit, _conformityCertificate);
    }

    function getBuildings() public view returns (Building[] memory) {
        return buildingList;
    }

    function doesExist(uint _id) view private returns (bool) {    
        for (uint i = 0; i < buildingList.length; i++) {
            if (buildingList[i].id == _id) {
                return true;
            }
        }

        return false;
    }

    // The following functions where taken from here.
    // https://github.com/ethereum/dapp-bin/blob/master/library/stringUtils.sol

    // they basically compare every character (i thing) with the ascci code and
    // return a number based on that. the other one just verifie if the return of the other equal 0,
    // which mean that they are equal.

    function compare(string memory _a, string memory _b) pure private returns (int) {
        bytes memory a = bytes(_a);
        bytes memory b = bytes(_b);
        uint minLength = a.length;
        if (b.length < minLength) minLength = b.length;
        //@todo unroll the loop into increments of 32 and do full 32 byte comparisons
        for (uint i = 0; i < minLength; i ++)
            if (a[i] < b[i])
                return -1;
            else if (a[i] > b[i])
                return 1;
        if (a.length < b.length)
            return -1;
        else if (a.length > b.length)
            return 1;
        else
            return 0;
    }

    function equal(string memory _a, string memory _b) pure private returns (bool) {
        return compare(_a, _b) == 0;
    }
}