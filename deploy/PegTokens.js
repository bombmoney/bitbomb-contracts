module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const tokenData = ['CZpegs BOMB Peg', 'CZbomb', 18];

    await deploy('PegToken', {
        from: deployer,
        args: [tokenData[0], tokenData[1], tokenData[2], dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Token'];
