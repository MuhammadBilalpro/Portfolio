import type { ReactNode } from "react";

interface Props {
  title: string;
  command: string;
  children: ReactNode;
}

export default function TerminalBlock({ title, command, children }: Props) {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="text-xs text-gray-500 ml-2 font-mono">{title}</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon text-xs sm:text-sm">root@bilal:~#</span>
          <span className="text-gray-300 text-xs sm:text-sm">{command}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
