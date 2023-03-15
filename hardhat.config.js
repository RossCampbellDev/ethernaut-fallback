require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("dotenv").config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GOERLI_P_KEY = process.env.GOERLI_P_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.18",
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        Goerli: {
            url: GOERLI_RPC_URL,
            accounts: [GOERLI_P_KEY],
            saveDeployments: true,
            blockConfirmations: 1,
            chainId: 5,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            31337: 0,
        },
        player: {
            default: 1,
            31337: 1,
        },
    },
}
