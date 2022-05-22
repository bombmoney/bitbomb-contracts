module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    await deploy('Share', {
        from: deployer,
        args: [1653451200, dev, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Share'];
