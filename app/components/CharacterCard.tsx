import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character, lang }: any) {
  const colors: any = {
    Gryffindor: "#740001",
    Slytherin: "#1A472A",
    Ravenclaw: "#0E1A40",
    Hufflepuff: "#FFD800",
  };

  return (
    <Link
      href={`/${lang}/character/${character.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: 260,
          borderRadius: 8,
          overflow: "hidden",
          background: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: colors[character.house] || "#999",
            color: character.house === "Hufflepuff" ? "black" : "white",
            padding: "10px 0",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {character.name}
        </div>

        <Image
          src={character.image || "/harry.jpg"}
          alt={character.name}
          width={260}
          height={360}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </Link>
  );
}