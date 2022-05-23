module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const share = await ethers.getContract('Share');

    await deploy('ShareFarmRewardPool', {
        from: deployer,
        args: [share.address, 1653955200], // 6 days after genesis
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['BShareRewardPool'];
//module.exports.dependencies = ["BShare"];
