import Image from "next/image";
import { getCharacterById } from "../../../lib/hp";

const translations = {
  es: {
    house: "Casa",
    gender: "Género",
    wand: "Varita",
    wood: "Madera",
    length: "Longitud",
    notFound: "No encontrado",
  },
  en: {
    house: "House",
    gender: "Gender",
    wand: "Wand",
    wood: "Wood",
    length: "Length",
    notFound: "Not found",
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; lang: "es" | "en" }>;
}) {
  const { id, lang } = await params;

  const t = translations[lang];
  const character = await getCharacterById(id);

  if (!character) return <div>{t.notFound}</div>;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 220px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#D9D9D9",
        paddingBottom: 40,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#E7B33C",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        {character.name}
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: 700,
            background: "#fff",
            borderRadius: 12,
            border: "3px solid #1F3D2B",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 30,
              background: "#F2F2F2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 14,
              fontSize: 16,
            }}
          >
            <p><b>{t.house}:</b> {character.house}</p>
            <p><b>{t.gender}:</b> {character.gender}</p>
            <p><b>{t.wand}:</b> {character.wand?.core}</p>
            <p><b>{t.wood}:</b> {character.wand?.wood}</p>
            <p><b>{t.length}:</b> {character.wand?.length}</p>
          </div>

          <div style={{ flex: 1 }}>
            <Image
              src={character.image || "/harry.jpg"}
              alt={character.name}
              width={350}
              height={450}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}