import type { ReactNode } from "react";


interface FooterProps {
  children?: ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return (
    <div className="mt-8 text-center text-sm font-mono leading-normal">
    An App to demonstrate the usefulness of Typescript with React ContextAPI <br /><span className="text-xs">Developed by <span className="text-emerald-400 text-sm font-semibold tracking-wider">useDev&trade;</span> software Studio;</span><br />&copy;2026.
    </div>
  );
}