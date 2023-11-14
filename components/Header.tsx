"use client";

import MetamaskAccount from "@/components/MetamaskAccount";

export default function Header() {
    return (
        <div className="w-full py-3 px-5 flex flex-row justify-between">
            <p>Senet. Only for testing purposes</p>
            <MetamaskAccount />
        </div>
    );
}
