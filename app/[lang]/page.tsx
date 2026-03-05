import { getCharacters } from "../lib/hp";
import CharacterCard from "../components/CharacterCard";

export default async function Page({
  params
}: {
  params: Promise<{ lang: string }>
}) {

  const { lang } = await params;

  const characters = await getCharacters();

  return (
    <div>

      <h1 className="text-center text-xl font-bold text-yellow-500 mb-6">
        Personajes de Harry Potter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {characters.map((c: { id: string; name: string; house?: string; image?: string }) => (
          <CharacterCard
            key={c.id}
            character={c}
            lang={lang}
          />
        ))}

      </div>

    </div>
  );
}