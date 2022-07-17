module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    //  const token = await ethers.getContract("Token");

    const ada = await deploy('BoardroomADA', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(ada.address);

    const bomb = await deploy('BoardroomATOM', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bomb.address);

    const emp = await deploy('BoardroomDOT', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(emp.address);
    const bnb = await deploy('BoardroomBTC', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['Boardroom'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool", "Treasury"];
