var Migrations = artifacts.require("./Migrations.sol");
var DepositContract = artifacts.require("../contracts/Deposit.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DepositContract);
};
