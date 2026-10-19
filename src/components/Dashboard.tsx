import type { ReactNode } from "react";

export function Dashboard({ children }: { children: ReactNode; }) {
    return <div className="dashboard">{children}</div>;
}

