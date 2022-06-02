module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    // const bnb = await deploy('BoardroomBNB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bnb.address);

    // const bomb = await deploy('BoardroomBOMB', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(bomb.address);

    // const emp = await deploy('BoardroomEMP', {
    //     from: deployer,
    //     //  args: [token.address, 1637284903],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log(emp.address);
    const bnb = await deploy('BoardroomBUSD', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['Boardroom'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool", "Treasury"];
