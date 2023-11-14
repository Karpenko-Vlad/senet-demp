"use client";

import {Button} from "@nextui-org/button";
import {abi as senetABI} from "../public/abi/senet.json";
import {useSDK} from "@metamask/sdk-react";
import {SDKProvider} from "@metamask/sdk";
import {Contract, ethers, parseUnits} from "ethers";


export default function MetamaskAllowance() {
    const {sdk, account} = useSDK();

    const setupSenetContract = async () => {
        const provider = new ethers.BrowserProvider(sdk?.activeProvider as SDKProvider);
        const signer = await provider.getSigner();

        return new Contract("0xc18bbBDd8129366D69EB8cDB29302Ae7E37cB2B3", senetABI, signer);
    }

    const allow = async () => {
        const senetContract = await setupSenetContract();
        const amount = parseUnits("100.0", 18);
        const tx = await senetContract.approve("0x133a7eb7c3b3b0eBAC3dd776db507B01Ef04bafB", amount);

        await tx.wait()
    }

    return (
        <>
            <Button color="secondary" size="lg" variant="bordered" onClick={allow}>Allow Contract To Take Users Senet</Button>
        </>
    );
}
