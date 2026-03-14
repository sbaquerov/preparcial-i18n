import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#D3A625",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href="/es">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
          alt="Harry Potter"
          style={{ height: 50, width: "auto" }}
        />
      </Link>

      <div>
        <Link href="/es" style={{ marginRight: 10 }}>
          ES
        </Link>
        <Link href="/en">EN</Link>
      </div>
    </header>
  );
}