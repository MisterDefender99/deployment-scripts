module.exports = async ({
     getNamedAccounts,
     deployments,
     getChainId,
     getUnnamedAccounts,
   }) => {
     const {deploy,get} = deployments;
     const {deployer2, deployer1, deployer3} = await getNamedAccounts();
     const coinAdeployedAddress =  await get('coinA');
    //  console.log("this is value of get(coinA): ",coinAdeployedAddress);
     const contractBdeployed = await deploy('coinB', {
       from: deployer2,
       gasLimit: 4000000,
       args: [coinAdeployedAddress.address],
     });
     console.log("CoinB contract is deployed at: ",contractBdeployed.address);
     console.log("Deployer of contract CoinB is: ",deployer2);
     };
