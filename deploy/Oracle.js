module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const token = await ethers.getContract('Token');

    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    // pancake
    pairAddress = '0x6EEaD0D8D62be08d32B0Cbe7bB65193FcB7aaD9c';

    await deploy('Oracle', {
        from: deployer,
        args: [pairAddress, 28800, 1653955200],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['Oracle'];
