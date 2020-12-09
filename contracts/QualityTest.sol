pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract QualityTest {
    struct Building {
        // Client
        // string clientName;

        // Building
        int256 id;
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

    mapping(int => address) public employee;
    mapping(int => Building) public buildings;

    function createContract(int _id, bool isTestPassed, string memory _operatingPermit, string memory _conformityCertificate, string memory _buildingAddress) public {
        if (isTestPassed) {
            employee[_id] = msg.sender;

            buildings[_id].id = _id;
            buildings[_id].buildingAddress = _buildingAddress;
            buildings[_id].operatingPermit = _operatingPermit;
            buildings[_id].conformityCertificate = _conformityCertificate;
            buildings[_id].elevatorDoorTest = "Passed";
            buildings[_id].elevatorCableTest = "Passed";
            buildings[_id].elevatorBreakTest = "Passed";
        }
    }

    function getBuilding(int _id) public view returns (Building memory) {
        return buildings[_id];
    }
}


    // struct Battery {
    //     string operatingPermit;
    //     Column[2] cols;
    // }

    // struct Column {
    //     string conformityCertificate;
    //     int256 floorServed;
    //     Elevator[4] elevs;
    // }

    // struct Elevator {
    //     string productLine;
    //     string doorTest;
    //     string cableTest;
    //     string breakTest;
    // }

    // struct BuildingAddress {
    //     string buildingName;
    //     string numberStreet;
    //     string city;
    //     string state;
    // }
    
    // struct Building {
    //     int256 id;
    //     BuildingAddress addr;
    //     Battery[1] bats;
    // }