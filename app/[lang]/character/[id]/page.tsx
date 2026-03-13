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
    <div className="flex justify-center py-10 bg-gray-200 min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[600px]">
        <h1 className="text-3xl font-bold text-yellow-600 text-center mb-6">
          {character.name}
        </h1>

        <p><b>Casa:</b> {character.house}</p>
        <p><b>Género:</b> {character.gender}</p>

        <h2 className="mt-4 font-bold">Varita</h2>
        <p><b>Madera:</b> {character.wand?.wood}</p>
        <p><b>Núcleo:</b> {character.wand?.core}</p>
        <p><b>Longitud:</b> {character.wand?.length}</p>

        <div className="mt-6 flex justify-center">
          <Image
            src={character.image || "/harry.jpg"}
            alt={character.name}
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}