import {Button} from '@nextui-org/button';
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex flex-col gap-5 items-center justify-center">
            <h1 className="text-3xl">Welcome To Senet Integration Demo!</h1>
            <Link href="introduction">
                <Button color="secondary" size="lg" variant="flat">Start</Button>
            </Link>
        </div>
    )
}
