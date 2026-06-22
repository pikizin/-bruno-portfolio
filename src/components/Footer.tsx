export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 mt-16 bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 mx-auto">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Construído por Bruno. Código fonte disponível no GitHub.
        </p>
      </div>
    </footer>
  );
}
