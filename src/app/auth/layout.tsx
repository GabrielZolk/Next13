import Link from "next/link";
import React, { ReactNode } from "react";


interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div>
            <h1>Texto compartilhado estado Auth</h1>
            {children}
            <Link href='/'>Home</Link>
        </div>
    )
}