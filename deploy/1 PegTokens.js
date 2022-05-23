module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const bnb = await deploy('CZbnbToken', {
        from: deployer,
        args: ['CZpegs BNB', 'CZbnb', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('BNB', bnb.address);
    const bomb = await deploy('CZbombToken', {
        from: deployer,
        args: ['CZpegs BOMB', 'CZbomb', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('BOMB', bomb.address);

    const emp = await deploy('CZempToken', {
        from: deployer,
        args: ['CZpegs EMP', 'CZemp', 18, dev],
        log: true,
        deterministicDeployment: false,
    });
    console.log('EMP', emp.address);
};

module.exports.tags = ['PegTokens'];
