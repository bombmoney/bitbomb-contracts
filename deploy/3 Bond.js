module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

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
    const bnb = await deploy('BondBUSD', {
        from: deployer,
        args: ['CZbusd BOND', 'CZbusdBOND'],
        log: true,
        deterministicDeployment: false,
    });
    console.log('BNB bond', bnb.address);
};

module.exports.tags = ['Bonds'];
