export async function getCharacters(): Promise<
  { id: string; name: string; house?: string; image?: string }[]
> {
  const res = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-store",
  });

  const data = (await res.json()) as {
    id: string;
    name: string;
    house?: string;
    image?: string;
  }[];

  return data.slice(0, 12);
}