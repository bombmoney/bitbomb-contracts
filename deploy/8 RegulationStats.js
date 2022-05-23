module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    await deploy('RegulationStats', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Stats'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool"];