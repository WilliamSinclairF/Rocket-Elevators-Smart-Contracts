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
        string floorServed;

        // Elevator
        string elevatorDoorTest;
        string elevatorCableTest;
        string elevatorBreakTest;
    }


    mapping(int => address) public employee;
    mapping(int => Building) public buildings;

    constructor() public {
        buildings[1] = Building({
            id: 1,
            buildingAddress: "725 Lebourgneuf, Lévis, QC",

            operatingPermit: "Not Permit",

            conformityCertificate: "No Certificate",
            floorServed: "5",

            elevatorDoorTest: "Not Passed",
            elevatorCableTest: "Not Passed",
            elevatorBreakTest: "Not Passed"
        });
    }

    // function addBuilding(int _id, string[9]) public {
        // buildings[_id].clientName               = string[1];
        // buildings[_id].buildingAddress          = string[2];
        // buildings[_id].operatingPermit          = string[3];
        // buildings[_id].conformityCertificate    = string[4];
        // buildings[_id].floorServed              = string[5];
        // buildings[_id].elevatorDoorTest         = string[6];
        // buildings[_id].elevatorCableTest        = string[7];
        // buildings[_id].elevatorBreakTest        = string[8];
    // }

    function createContract(int _id, bool isTestPassed, string memory _operatingPermit, string memory _conformityCertificate) public {
        employee[_id] = msg.sender;
        buildings[_id].operatingPermit = _operatingPermit;
        buildings[_id].conformityCertificate = _conformityCertificate;

        if (isTestPassed) {
            buildings[_id].buildingAddress = "Passed";
            buildings[_id].operatingPermit = "Passed";
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