const dictionaries = {
  es: () => import("./es.json").then((m) => m.default),
  en: () => import("./en.json").then((m) => m.default),
};

export async function getDictionary(lang: "es" | "en") {
  return dictionaries[lang]();
}