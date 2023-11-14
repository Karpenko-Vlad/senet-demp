import React from "react";
import Header from "@/components/Header";

export default function DemoLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-full flex flex-col items-center gap-6">
            <Header />
            {children}
        </div>
    );
}
