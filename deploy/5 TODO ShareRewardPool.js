module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const share = await ethers.getContract('BitShare');

    await deploy('ShareFarmRewardPool', {
        from: deployer,
        args: [share.address, 1657818000], // 6 days after genesis
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['ShareRewardPool'];
//module.exports.dependencies = ["BShare"];
