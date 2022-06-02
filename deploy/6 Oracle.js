module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //const token = await ethers.getContract('CZbnbToken');

    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    // pancake
    // const pairAddressBNB = '0x6773C6b86c15A9c10219eb92c036DE3F8F2ae956';

    // const bnb = await deploy('OracleBNB', {
    //     from: deployer,
    //     args: [pairAddressBNB, 28800, 1653588000],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bnb.address);

    // pancake
    // const pairAddressBOMB = '0x84b860ED296b12615b3bA50A7BE482E8eF2699B1';

    // const bomb = await deploy('OracleBOMB', {
    //     from: deployer,
    //     args: [pairAddressBOMB, 28800, 1653595200],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bomb.address);

    // pancake
    // const pairAddressEMP = '0xdDb1046a98A1068d1dCC3229699e3a1ee203b6D8';

    // const emp = await deploy('OracleEMP', {
    //     from: deployer,
    //     args: [pairAddressEMP, 28800, 1653602400],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(emp.address);
    const pairAddressBNB = '0x16254Cd930547e9591cdF4e3594f32857d106E12';

    const bnb = await deploy('OracleBUSD', {
        from: deployer,
        args: [pairAddressBNB, 28800, 1654128000],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['Oracle'];
