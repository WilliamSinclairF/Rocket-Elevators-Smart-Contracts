const QualityTest = artifacts.require("./QualityTest.sol");

contract("QualityTest", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const qualityTest = await QualityTest.deployed();

    // Get myString from public variable getter
    await qualityTest.createContract(1, true, "CGO", "PPCS", "some address");

    const storedTest = await qualityTest.getBuildings([1], 0);
    console.log(storedTest[0]);

    const result = "1,some address,CGO,PPCS,Passed,Passed,Passed";

    assert.equal(storedTest[0], result, "The string was not stored : " + storedTest[0]);
  });
});

// const build = {
//   id: 1,
//   buildingAddress: {
//     buildingName: "CodeBoxx Castle",
//     numberStreet: "725 Lebourgneuf",
//     city: "Levis",
//     state: "QC"
//   },
//   batteries: [
//     {
//       operatingPermit: "",
//       columns: [
//         {
//           conformityCertificate: "",
//           floorServed: 5,
//           elevators: [
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//           ]
//         },
//         {
//           conformityCertificate: "",
//           floorServed: 5,
//           elevators: [
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//             {
//               productLine: "Excelium",
//               doorTest: "null",
//               cableTest: "null",
//               breakTest: "null"
//             },
//           ]
//         }
//       ]
//     }
//   ]
// }