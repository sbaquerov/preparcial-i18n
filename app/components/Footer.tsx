type Props = {
  lang: "es" | "en";
};

export default function Footer({ lang }: Props) {
  const text = {
    es: {
      rights: "© 2026 Harry Potter App. Todos los derechos reservados.",
      dev: "Desarrollado para: ISIS3710",
    },
    en: {
      rights: "© 2026 Harry Potter App. All rights reserved.",
      dev: "Developed for: ISIS3710",
    },
  };

  const t = text[lang];

  return (
    <footer
      style={{
        background: "#A3B29F",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 14,
      }}
    >
      <div>{t.rights}</div>
      <div>{t.dev}</div>
    </footer>
  );
}