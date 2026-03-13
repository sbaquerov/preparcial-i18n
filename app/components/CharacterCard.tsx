import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character, lang }: any) {
  const colors: any = {
    Gryffindor: "bg-[#740001]",
    Slytherin: "bg-[#1A472A]",
    Ravenclaw: "bg-[#0E1A40]",
    Hufflepuff: "bg-[#FFD800]",
  };

  return (
    <Link href={`/${lang}/character/${character.id}`}>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <div
          className={`text-white text-center py-2 font-bold ${
            colors[character.house] || "bg-gray-500"
          }`}
        >
          {character.name}
        </div>

        <Image
          src={character.image || "/harry.jpg"}
          alt={character.name}
          width={300}
          height={400}
          className="w-full h-[400px] object-cover"
        />
      </div>
    </Link>
  );
}