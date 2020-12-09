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
            Building memory build;
            build.employee = msg.sender;

            build.id = _id;

            build.buildingAddress = _buildingAddress;

            build.operatingPermit = _operatingPermit;

            build.conformityCertificate = _conformityCertificate;

            build.elevatorDoorTest = "Passed";
            build.elevatorCableTest = "Passed";
            build.elevatorBreakTest = "Passed";

            buildings[_id] = build;
        }
    }

    function getBuilding(int _id) public view returns (Building memory) {
        return buildings[_id];
    }

    function getBuildings(int[] memory _ids) public view returns (Building[30] memory) {
        Building[30] memory buildingList; 

        for (uint i = 0; i < 30; i++) {
            int[] memory index = _ids;
            buildingList[i] = buildings[index[i]];
        }

        return buildingList;
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