const translations = {
  es: {
    rights: "© 2026 Harry Potter App. Todos los derechos reservados.",
    developed: "Desarrollado para: ISIS3710",
  },
  en: {
    rights: "© 2026 Harry Potter App. All rights reserved.",
    developed: "Developed for: ISIS3710",
  },
};

export default function Footer({ lang }: { lang: "es" | "en" }) {
  const t = translations[lang];

  return (
    <footer
      style={{
        background: "#A3B29F",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      <div>{t.rights}</div>
      <div>{t.developed}</div>
    </footer>
  );
}