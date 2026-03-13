export async function getCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.slice(0, 12);
}

export async function getCharacterById(id: string) {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data[0];
}