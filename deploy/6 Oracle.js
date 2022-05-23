module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //const token = await ethers.getContract('CZbnbToken');

    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    // pancake
    const pairAddress = '0x1e29997142e02F6F3B01b711eFcAadf431C47f46';

    await deploy('Oracle', {
        from: deployer,
        args: [pairAddress, 28800, 1653955200],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Oracle'];
