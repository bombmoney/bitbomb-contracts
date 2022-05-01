module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    await deploy('SBShare', {
        from: deployer,
        args: [1653955200, dev, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['BShare'];
