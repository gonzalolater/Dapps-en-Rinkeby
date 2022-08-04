const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
  const deployed = await PlatziPunks.deploy();

  console.log("Platzi Punks is deployec at:", deployed.address);
};

deploy()
  .them(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
