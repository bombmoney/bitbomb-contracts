module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const token = await ethers.getContract('Token');

    await deploy('TokenRewardPool', {
        from: deployer,
        args: [token.address, 1653609600], // Should be 1 day after Genesis pool starts
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['TokenRewardPool'];
//module.exports.dependencies = ["Token"];
