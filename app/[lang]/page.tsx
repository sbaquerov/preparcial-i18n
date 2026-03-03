import Link from "next/link";
import { getDictionary } from "../../dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main style={{ padding: 24 }}>
      <h1>
        {dict.title}: {lang}
      </h1>

      <p>{dict.welcome}</p>
      <p>{dict.profile}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link href="/es">{dict.goSpanish}</Link>
        <Link href="/en">{dict.goEnglish}</Link>
      </div>
    </main>
  );
}