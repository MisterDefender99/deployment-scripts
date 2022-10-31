module.exports = async ({
     getNamedAccounts,
     deployments,
     getChainId,
     getUnnamedAccounts,
   }) => {
     const {deploy} = deployments;
     const {deployer2, deployer1, deployer3} = await getNamedAccounts();
     const contractAdeployed = await deploy('coinA', {
       from: deployer1,
       gasLimit: 4000000,
       args: [],
     });
     const {deployer2, deployer1, deployer3} = await getNamedAccounts();
     function approveAll(address spender, uint tokens) external override returns (bool){
        approved[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
     console.log("CoinA contract is deployed at: ",contractAdeployed.address);
     console.log("Deployer of contract CoinA is: ",deployer1);
     };

