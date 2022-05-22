module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const token = await ethers.getContract('PegToken');

    await deploy('GenesisRewardPool', {
        from: deployer,
        args: [token.address, 1653256797],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['GenesisRewardPool'];
