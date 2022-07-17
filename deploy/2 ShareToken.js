module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    await deploy('BitShare', {
        from: deployer,
        args: [1657728000, dev, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Share'];
