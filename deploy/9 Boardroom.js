module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    await deploy('Boardroom', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Boardroom'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool", "Treasury"];