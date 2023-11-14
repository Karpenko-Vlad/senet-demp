"use client";

import {useSDK} from "@metamask/sdk-react";
import {Contract, ethers, formatUnits, parseUnits} from "ethers";
import {SDKProvider} from "@metamask/sdk";
import {abi as wrapperABI} from "../public/abi/senetWrapper.json";
import {abi as senetABI} from "../public/abi/senet.json";
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function SendSenet() {
    const {sdk, account} = useSDK();
    const [senetBalance, setSenetBalance] = useState<string>();
    const [updateBalance, setUpdateBalance] = useState<boolean>();

    const provider = new ethers.BrowserProvider(sdk?.activeProvider as SDKProvider);

    const senetContract = new Contract("0xc18bbBDd8129366D69EB8cDB29302Ae7E37cB2B3", senetABI, provider);

    useEffect(() => {
        const updateBalance = async () => {
            const balance = await getSenetBalance(account as string);
            console.log(balance);
            setSenetBalance(balance as string);
        }

        updateBalance();
    }, [account, updateBalance])

    const getSenetBalance = async (acc: string) => {
        const decimals = await senetContract.decimals()
        const balance = await senetContract.balanceOf(acc);

        return formatUnits(balance, decimals);
    }

    const sendSenet = async () => {
        const signer = await provider.getSigner();
        const wrapperContract = new Contract("0x37C71576ce3D349e26659E52085d707d776eC327", wrapperABI, signer);

        const amount = parseUnits("100.0", 18);

        const tx = await wrapperContract.sendTokens(amount)
        await tx.wait();
        setUpdateBalance(!updateBalance);
    }

    return (
        <>
            <p>Your senet balance: {senetBalance}</p>
            <Button color="secondary" size="lg" variant="bordered" onClick={sendSenet}>Give me some SENET!</Button>
            <Link href="/demo/allowance">
                <Button color="secondary" size="lg" variant="flat">Next</Button>
            </Link>
        </>
    );
}
