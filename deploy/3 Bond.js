module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    // const bnb = await deploy('BondBNB', {
    //     from: deployer,
    //     args: ['CZbnb BOND', 'CZbnbBOND'],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log('BNB bond', bnb.address);

    // const bomb = await deploy('BondBOMB', {
    //     from: deployer,
    //     args: ['CZbomb BOND', 'CZbombBOND'],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log('BOMB bond', bomb.address);

    // const emp = await deploy('BondEMP', {
    //     from: deployer,
    //     args: ['CZemp BOND', 'CZempBOND'],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log('EMP bond', emp.address);

    const ada = await deploy('BondADA', {
        from: deployer,
        args: ['bitADA Bond', 'ADABOND'],
        log: true,
        deterministicDeployment: false,
    });
    console.log('ada bond', ada.address);

    const atom = await deploy('BondATOM', {
        from: deployer,
        args: ['bitATOM Bond', 'ATOMBOND'],
        log: true,
        deterministicDeployment: false,
    });
    console.log('atom bond', atom.address);


    const dot = await deploy('BondDOT', {
        from: deployer,
        args: ['bitDOT Bond', 'DOTBOND'],
        log: true,
        deterministicDeployment: false,
    });
    console.log('dot bond', dot.address);


    const btc = await deploy('BondBTC', {
        from: deployer,
        args: ['bitBTC Bond', 'BTCBOND'],
        log: true,
        deterministicDeployment: false,
    });
    console.log('btc bond', btc.address);
};

module.exports.tags = ['Bonds'];
