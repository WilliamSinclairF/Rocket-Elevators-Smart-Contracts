pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract QualityTest {
    Building[] public buildings;

    struct Building {
        address employee;

        // Building
        uint id;

        // Battery
        string operatingPermit;

        // Column
        string conformityCertificate;

        // Elevator
        bool isDoorTest;
        bool isCableTest;
        bool isBreakTest;
    }

    function createContract(uint _id, bool isTestPassed, string memory _operatingPermit, string memory _conformityCertificate) public {
        if (isTestPassed) {
            buildings.push(Building({
                id: _id,
                employee: msg.sender,

                operatingPermit: _operatingPermit,
                conformityCertificate: _conformityCertificate,
                isDoorTest: true,
                isCableTest: true,
                isBreakTest: true
            }));
        }
    }

    function getBuilding() public view returns (Building[] memory) {
        return buildings;
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