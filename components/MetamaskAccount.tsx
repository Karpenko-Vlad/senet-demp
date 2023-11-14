"use client";

import {useSDK} from "@metamask/sdk-react";
import {User} from "@nextui-org/user";
import {useEffect, useState} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function MetamaskAccount() {
    const {sdk, account} = useSDK();
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        const getBalance = async () => {
            const web3Balance = await sdk?.activeProvider?.request({
                method: 'eth_getBalance', "params": [
                    account, "latest"
                ]
            });

            // sdk.
            if (web3Balance) {
                setBalance(formatBalance(web3Balance as string));
            }
        }

        getBalance();
    }, [sdk, account]);

    const formatBalance = (rawBalance: string): number => {
        return (parseInt(rawBalance) / 1000000000000000000)
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <User
                    name={account}
                    description={"ETH: " + balance}
                    className="cursor-pointer"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Disconnect
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
