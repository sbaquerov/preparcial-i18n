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
        background: "#D9D9D9",
        minHeight: "100vh",
        paddingTop: 40,
        paddingBottom: 60,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 40,
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#E7B33C",
            fontSize: 32,
            fontWeight: 900,
            marginBottom: 8,
          }}
        >
          Personajes de Harry Potter
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: 1000,
            margin: "0 auto 40px auto",
            color: "#333",
            lineHeight: 1.4,
          }}
        >
          Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
            justifyItems: "center",
          }}
        >
          {characters.map((c: any) => (
            <CharacterCard key={c.id} character={c} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}