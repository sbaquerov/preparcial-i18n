import Link from "next/link";

type Props = {
  lang: "es" | "en";
};

export default function Header({ lang }: Props) {
  return (
    <header
      style={{
        background: "#D3A625",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link href={`/${lang}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
          alt="Harry Potter"
          style={{
            height: 50,
            width: "auto",
          }}
        />
      </Link>

      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/en" style={{ color: "white", fontWeight: "bold" }}>
          EN
        </Link>
        <Link href="/es" style={{ color: "white", fontWeight: "bold" }}>
          ES
        </Link>
      </div>
    </header>
  );
}