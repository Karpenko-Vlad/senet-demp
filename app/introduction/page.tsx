import ConnectMetamask from "@/components/ConnectMetamask";

export default function Introduction() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="text-2xl">Firstly, lets connect your metamask wallet</h1>
            <ConnectMetamask></ConnectMetamask>
        </div>
    );
}
