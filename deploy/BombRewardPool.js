
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const bomb = await ethers.getContract("SBomb");

    await deploy("BombRewardPool", {
        from: deployer,
        args: [bomb.address, 1653609600], // Should be 1 day after Genesis pool starts
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["BombRewardPool"];
//module.exports.dependencies = ["Bomb"];
