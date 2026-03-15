import Image from "next/image";
import { getCharacterById } from "../../../lib/hp";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = await getCharacterById(id);

  if (!character) return <div>No encontrado</div>;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 220px)", // ← magia real
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
            <p><b>Casa:</b> {character.house}</p>
            <p><b>Genero:</b> {character.gender}</p>
            <p><b>Varita:</b> {character.wand?.core}</p>
            <p><b>Madera:</b> {character.wand?.wood}</p>
            <p><b>Longitud:</b> {character.wand?.length}</p>
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