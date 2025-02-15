// app/entrar/layout.tsx
import type { ReactNode } from "react";

export default function EntrarLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
