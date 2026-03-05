import Image from "next/image";
import Link from "next/link";

type Character = {
  id: string;
  name: string;
  house?: string;
  image?: string;
};

const BgColorHouses: Record<string, string> = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800]",
  NoHouse: "bg-[#D1D5DB]",
};

export default function CharacterCard({
  character,
  lang,
}: {
  character: Character;
  lang: string;
}) {
  const houseKey =
    character.house && BgColorHouses[character.house]
      ? character.house
      : "NoHouse";

  return (
    <Link href={`/${lang}/character/${character.id}`}>
      <div className="rounded overflow-hidden shadow bg-white">
        <div className={`${BgColorHouses[houseKey]} text-white text-center p-2`}>
          {character.name}
        </div>

        <div className="relative w-full h-[250px]">
          <Image
            src={character.image || "https://ik.imagekit.io/hpapi/harry.jpg"}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}