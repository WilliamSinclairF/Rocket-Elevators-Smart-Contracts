const QualityTest = artifacts.require("./QualityTest.sol");

contract("QualityTest", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const qualityTest = await QualityTest.deployed();

    // Get myString from public variable getter
    await qualityTest.secure(1, true, "CGO", "PPCS", "fgdgsdfgsdf");

    const storedTest = await qualityTest.getBuilding(1);
    console.log(storedTest);

    const result ="1,Passed,Passed,PPCS,Not Passed,Not Passed,Passed"

    assert.equal(storedTest, result, "The string was not stored : " + storedTest);
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