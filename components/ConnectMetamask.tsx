"use client";

import {useContext, useEffect, useState} from "react";
import {useSDK} from "@metamask/sdk-react";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function ConnectMetamask() {
    const [metamaskAccount, setMetamaskAccount] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const {sdk, connected, connecting, provider, chainId, account} = useSDK();

    useEffect(() => {
        if (account) {
            setMetamaskAccount(account);
        }

        setLoading(false);
    }, [account]);

    const connect = async () => {
        try {
            console.log(sdk);
            const accounts = await sdk?.connect();
            // @ts-ignore
            setMetamaskAccount(accounts?.[0]);
        } catch (err) {
            console.warn(`failed to connect..`, err);
        }
    };

    return (
        <>
            {
                loading ? <></> : (connected ?
                        (
                            <div>
                                <Link href='demo/network'>
                                    <Button color="secondary" size="lg" variant="flat">Next</Button>
                                </Link>
                            </div>
                        ) :
                        <Button color="secondary" size="lg" variant="bordered" onClick={connect}>
                            Connect Metamask
                        </Button>
                )
            }
        </>
    );
}
