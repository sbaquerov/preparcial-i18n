import { getCharacters } from "@/app/lib/hp";
import CharacterCard from "@/app/components/CharacterCard";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const characters = await getCharacters();

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 40,
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Personajes de Harry Potter
      </h1>

      <p style={{ textAlign: "center", marginBottom: 40 }}>
        Explora el universo mágico de Harry Potter
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
        }}
      >
        {characters.map((c: any) => (
          <CharacterCard key={c.id} character={c} lang={lang} />
        ))}
      </div>
    </div>
  );
}