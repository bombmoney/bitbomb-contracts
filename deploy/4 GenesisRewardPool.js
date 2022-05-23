module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const bnbToken = await ethers.getContract('CZbnbToken');

    const bnbDeploy = await deploy('GenesisBNBRewardPool', {
        from: deployer,
        args: [bnbToken.address, 1653260397],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnbDeploy.address);

    const bombToken = await ethers.getContract('CZbombToken');

    const bombDeploy = await deploy('GenesisBOMBRewardPool', {
        from: deployer,
        args: [bombToken.address, 1653260397],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bombDeploy.address);

    const empToken = await ethers.getContract('CZempToken');

    const empDeploy = await deploy('GenesisEMPRewardPool', {
        from: deployer,
        args: [empToken.address, 1653260397],
        log: true,
        deterministicDeployment: false,
    });
    console.log(empDeploy.address);
};

module.exports.tags = ['GenesisRewardPool'];
