import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-[#D9D9D9]">
        {children}
      </main>

      <Footer />
    </div>
  );
}