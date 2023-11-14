import MetamaskNetwork from "@/components/MetamaskNetwork";

export default function NetworkPage() {
    return (
        <>
            <h1 className="text-3xl">Network Setup</h1>
            <p>For testing connection we are using Goerli Test Network</p>
            <p>
                You can get test ethers to your test network account here:
                <a href="https://goerlifaucet.com/" className="text-blue-500"> https://goerlifaucet.com/</a>
            </p>
            <MetamaskNetwork />
        </>
    )
}
