import Image from "next/image";
import type { Metadata } from "next";
import { getDictionary } from "../../../../dict/dictionaries
export const metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description:
    "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.",
};

type Character = {
  id: string;
  name: string;
  house?: string;
  gender?: string;
  image?: string;
  wand?: {
    wood?: string;
    core?: string;
    length?: number;
  };
};

const BorderColorHouses: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  NoHouse: "border-[#D1D5DB]",
};

function houseKey(house?: string) {
  return house && BorderColorHouses[house] ? house : "NoHouse";
}

async function getCharacterById(id: string): Promise<Character | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = (await res.json()) as Character[];
  return data[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const character = await getCharacterById(id);

  return {
    title: `Detalle de ${character?.name ?? "Personaje"} - HarryPotterApp`,
    description:
      "Consulta información detallada de cada personaje del mundo mágico.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;

  const dict = await getDictionary(lang);
  const character = await getCharacterById(id);

  if (!character) {
    return <div className="p-6">No encontrado</div>;
  }

  const border = BorderColorHouses[houseKey(character.house)];

  return (
    <div className="flex justify-center py-8">
      <div
        className={`w-full max-w-4xl border-2 ${border} rounded-lg bg-white shadow-md overflow-hidden`}
      >
        <h1 className="text-center text-2xl font-bold text-yellow-500 py-4">
          {character.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 text-base">
            <p className="mb-2">
              <strong>{dict.detail.house}:</strong>{" "}
              {character.house || "N/A"}
            </p>

            <p className="mb-2">
              <strong>{dict.detail.gender}:</strong>{" "}
              {character.gender || "N/A"}
            </p>

            <p className="mt-4 mb-2 font-bold">{dict.detail.wand}</p>

            <p className="mb-2">
              <strong>{dict.detail.wood}:</strong>{" "}
              {character.wand?.wood || "N/A"}
            </p>

            <p className="mb-2">
              <strong>{dict.detail.core}:</strong>{" "}
              {character.wand?.core || "N/A"}
            </p>

            <p className="mb-2">
              <strong>{dict.detail.length} (cm):</strong>{" "}
              {character.wand?.length ?? "N/A"}
            </p>
          </div>

          <div className="flex items-center justify-center p-6">
            <Image
              src={character.image || "https://ik.imagekit.io/hpapi/harry.jpg"}
              alt={character.name}
              width={320}
              height={420}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}