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
    <div className="p-10 bg-gray-200 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-yellow-600 mb-2">
        Personajes de Harry Potter
      </h1>

      <p className="text-center mb-10">
        Explora el universo mágico de Harry Potter
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((c: any) => (
          <CharacterCard key={c.id} character={c} lang={lang} />
        ))}
      </div>
    </div>
  );
}