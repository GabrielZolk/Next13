import React, { ReactNode } from "react";


interface NewRouteLayoutProps {
    children: ReactNode
}

export default function NewRouteLayout({ children }: NewRouteLayoutProps) {
    return (
        <div>
            <h1>Texto compartilhado pelo template recarregado na hora</h1>
            {children}
        </div>
    )
}