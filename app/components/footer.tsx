import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-10 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Produto</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Recursos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Preços
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Atualizações
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Documentação
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Sobre
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Carreiras
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Termos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Cookies
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Licenças
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Facebook
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CognAi. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

