pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract QualityTest {
    struct Building {
        // Client
        address employee;

        // Building
        int256 id;
        string buildingAddress;

        // Battery
        string operatingPermit;

        // Column
        string conformityCertificate;
        string floorServed;

        // Elevator
        string elevatorDoorTest;
        string elevatorCableTest;
        string elevatorBreakTest;
    }

    mapping(int => Building) public buildings;

    function secure(
        int _id,
        bool isTestPassed,
        string memory _operatingPermit,
        string memory _conformityCertificate,
        string memory _buildingAddress
    ) public {
        if (isTestPassed) {
            Building memory build = buildings[_id];
            build.employee = msg.sender;

            build.id = _id;

            build.buildingAddress = _buildingAddress;

            build.operatingPermit = _operatingPermit;

            build.conformityCertificate = _conformityCertificate;

            build.buildingAddress = "Passed";
            build.operatingPermit = "Passed";
            build.elevatorBreakTest = "Passed";
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