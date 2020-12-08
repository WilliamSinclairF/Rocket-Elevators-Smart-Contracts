// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract MyArrayStore {
    string[] public myArray = ["str 1"];

    function set(string[] memory setArray) public {
        myArray = setArray;
    }

    function getArray() public view returns (string[] memory) {
        return myArray;
    }
}