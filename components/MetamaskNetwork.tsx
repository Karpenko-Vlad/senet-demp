"use client";
import {useSDK} from "@metamask/sdk-react";
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function MetamaskNetwork() {
    const networks = {
        0x1: "Main Network",
        0x5: "Goerli test network",
        0xaa36a7: "Sepolia test network",
        0xe704: "Linea test network",
        0x539: "Localhost network"
    };

    const {sdk} = useSDK();
    const [currentNetwork, setCurrentNetwork] = useState<string>();
    const [networkVersion, setNetworkVersion] = useState<string>();

    useEffect(() => {
        const networkName = formatNetwork(sdk?.activeProvider?.networkVersion as string);
        setNetworkVersion(sdk?.activeProvider?.networkVersion as string);
        setCurrentNetwork(networkName);
    });

    const formatNetwork = (networkVersion: string) => {
        // @ts-ignore
        return networks[networkVersion] ?? "Unknown Network";
    }

    const changeNetwork = async (hexChainId: string) => {
        console.debug(`switching to network chainId=${hexChainId}`);
        try {
            const response = await sdk?.activeProvider?.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: hexChainId}], // chainId must be in hexadecimal numbers
            });
            console.debug(`response`, response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <p>Current Network: {currentNetwork}</p>
            <p>Current Network Version: {networkVersion}</p>
            {networkVersion == '5' ?
                <Link href="/demo/senet"><Button color="secondary" size="lg" variant="flat">Next</Button></Link> :
                <Button color="secondary" size="lg" variant="bordered" onClick={() => changeNetwork('0x5')}>
                    Change Network
                </Button>
            }
        </>
    );
}
