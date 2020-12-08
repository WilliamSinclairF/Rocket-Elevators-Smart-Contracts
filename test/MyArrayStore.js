const MyArrayStore = artifacts.require("./MyArrayStore.sol");

contract("MyArrayStore", accounts => {
  it('should store the Array ["1", "2", "3", "final test"]', async () => {
    const myArrayStore = await MyArrayStore.deployed();

    let setArray = ["1", "2", "3", "final test"]
    await myArrayStore.set(setArray, { from: accounts[0] });

    const storedArray = await myArrayStore.getArray();
    // console.log(storedArray);

    assert.equal(storedArray, "1,2,3,final test", "The Array was not stored");
  });
});