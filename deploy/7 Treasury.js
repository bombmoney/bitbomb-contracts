module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

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
    const ada = await deploy('TreasuryADA', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(ada.address);

    const atom = await deploy('TreasuryATOM', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(atom.address);
    const dot = await deploy('TreasuryDOT', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(dot.address);

    const bnb = await deploy('TreasuryBTC', {
        from: deployer,
        //  args: [token.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
    console.log(bnb.address);
};

module.exports.tags = ['Treasury'];
//module.exports.dependencies = ["Token", "BShare", "TokenRewardPool", "BShareRewardPool"];
