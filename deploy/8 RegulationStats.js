module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    // const bnb = await deploy('StatsBNB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bnb.address);

    // const bomb = await deploy('StatsBOMB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bomb.address);

    // const emp = await deploy('StatsEMP', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(emp.address);
    const emp = await deploy('StatsBUSD', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(emp.address);
};

module.exports.tags = ['Stats'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool"];
