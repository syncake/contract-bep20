const token = artifacts.require("BEP20Token");

module.exports = function (deployer) {
  deployer.deploy(token, "NB Token", "NBT", 18, 100000000);
};
