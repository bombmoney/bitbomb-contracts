module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const btc = await deploy('BitBTCToken', {
        from: deployer,
        args: ['bitBOMB BTC Peg', 'bitBTC', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('btc', btc.address);


    const dot = await deploy('BitDOTToken', {
        from: deployer,
        args: ['bitBOMB DOT Peg', 'bitDOT', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('dot', dot.address);

    const atom = await deploy('BitATOMToken', {
        from: deployer,
        args: ['bitBOMB ATOM Peg', 'bitATOM', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('atom', atom.address);

    const ada = await deploy('BitADAToken', {
        from: deployer,
        args: ['bitBOMB ADA Peg', 'bitADA', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('ada', ada.address);

};

module.exports.tags = ['PegTokens'];
