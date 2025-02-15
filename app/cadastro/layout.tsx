// app/cadastro/layout.tsx
import type { ReactNode } from "react";

export default function CadastroLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
