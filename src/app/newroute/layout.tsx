import React, { ReactNode } from "react";


interface NewRouteLayoutProps {
    children: ReactNode
}

export default function NewRouteLayout({ children }: NewRouteLayoutProps) {
    return (
        <div>
            <h1>Texto compartilhado estado NewRouteLayoutProps</h1>
            {children}
        </div>
    )
}