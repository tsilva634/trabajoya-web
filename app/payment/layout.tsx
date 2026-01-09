export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Este layout no renderiza el Navbar, solo el contenido
  return <>{children}</>;
}

