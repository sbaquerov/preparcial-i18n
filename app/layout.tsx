export const metadata = {
  title: "Harry Potter App",
  description: "App de personajes de Harry Potter para ISIS3710",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}