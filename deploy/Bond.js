module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer} = await getNamedAccounts();

    const tokenData = ['CZpegs BOMB BOND', 'CZbombBOND'];

    await deploy('Bond', {
        from: deployer,
        args: [tokenData[0], tokenData[1]],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Bond'];
