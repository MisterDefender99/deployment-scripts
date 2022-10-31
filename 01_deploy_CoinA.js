module.exports = async ({
     getNamedAccounts,
     deployments,
     getChainId,
     getUnnamedAccounts,
   }) => {
     const {deploy} = deployments;
     const {deployer1} = await getNamedAccounts();
     const contractAdeployed = await deploy('coinA', {
       from: deployer1,
       gasLimit: 4000000,
       args: [],
     });
     console.log("CoinA contract is deployed at: ",contractAdeployed.address);
     console.log("Deployer of contract CoinA is: ",deployer1);
     };

