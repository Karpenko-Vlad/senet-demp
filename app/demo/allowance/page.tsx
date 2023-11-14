import MetamaskAllowance from "@/components/MetamaskAllowance";

export default function AllowancePage() {
    return (
        <>
            <h1 className="text-3xl">After that we need to allow Tournament Contract Spend Users SENET Tokens</h1>
            <MetamaskAllowance></MetamaskAllowance>
        </>
    );
}
