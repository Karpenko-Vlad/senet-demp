'use client';

import {MetaMaskProvider} from "@metamask/sdk-react";
import {NextUIProvider} from '@nextui-org/react'
import React, {useState} from "react";

export default function SDKContainer({children}: {
    children: React.ReactNode
}) {
    return (
        <MetaMaskProvider sdkOptions={{
            dappMetadata: {
                name: "Senet Tournaments App",
                // url: window.location.host,
            }
        }}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </MetaMaskProvider>
    )
}
