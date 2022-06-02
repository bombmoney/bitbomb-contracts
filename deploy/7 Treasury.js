module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    // const bnb = await deploy('TreasuryBNB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bnb.address);

    // const bomb = await deploy('TreasuryBOMB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bomb.address);

    // const emp = await deploy('TreasuryEMP', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(emp.address);
    const bnb = await deploy('TreasuryBUSD', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['Treasury'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool"];
