module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const bnb = await deploy('AddLiquidity', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['AddLiquidity'];
