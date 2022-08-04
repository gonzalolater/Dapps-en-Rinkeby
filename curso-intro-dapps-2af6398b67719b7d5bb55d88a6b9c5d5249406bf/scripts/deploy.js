const deploy = async () => {};

deploy()
  .them(() => process.exitCode(0))
  .catch((error) => console.log(error));
