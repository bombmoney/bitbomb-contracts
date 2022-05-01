
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const bomb = await ethers.getContract("SBomb");

    await deploy("BombGenesisRewardPool", {
        from: deployer,
        args: [bomb.address, 1653523200],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["BombGenesisRewardPool"];
//module.exports.dependencies = ["Bomb"];
