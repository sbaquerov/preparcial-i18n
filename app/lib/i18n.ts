export async function getDictionary(lang: string) {
  return (await import(`../messages/${lang}.json`)).default;
}