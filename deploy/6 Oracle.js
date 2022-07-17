module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    //const token = await ethers.getContract('CZbnbToken');

    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    //pancake
    const pairAddressADA = '0x3E784ce022D55bCfD87F6D7281fE5aAcD6e44018';


    const pairAddressATOM = '0xBc60EDc20e537a85F1EB91f471e32A8839B92722';

    const pairAddressDOT = '0xcd47cB7E1e0E9a4DEc4a1C02A3a6bACE79134622';


    const pairAddressBTC = '0x601E4fAbFC98933b60DcE8d198b936F2D2D5aA09';


    // const ada = await deploy('OracleADA', {
    //     from: deployer,
    //     args: [pairAddressADA, 28800, 1657839600],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(ada.address);

    // const atom = await deploy('OracleATOM', {
    //     from: deployer,
    //     args: [pairAddressATOM, 28800, 1657832400],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(atom.address);

    // const dot = await deploy('OracleDOT', {
    //     from: deployer,
    //     args: [pairAddressDOT, 28800, 1657825200],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(dot.address);

    const btc = await deploy('OracleBTC', {
        from: deployer,
        args: [pairAddressBTC, 28800, 1657818000],
        log: true,
        deterministicDeployment: false,
    });
    console.log(btc.address);


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
    // const pairAddressBNB = '0x9dF61bECE2d2a2479d6656725DD0708D42A27cda';

    // const bnb = await deploy('OracleBUSD', {
    //     from: deployer,
    //     args: [pairAddressBNB, 1440, 1656753493],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bnb.address);
};

module.exports.tags = ['Oracle'];
