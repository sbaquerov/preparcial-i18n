import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} />

      <main className="flex-1 bg-[#D9D9D9]">
        {children}
      </main>

      <Footer lang={lang} />
    </div>
  );
}