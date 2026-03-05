import Link from "next/link";
import Image from "next/image";

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="bg-[#FDB608] flex flex-col items-center p-4">
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          alt="Harry Potter"
          width={150}
          height={50}
        />
      </Link>

      <div className="flex gap-2 mt-2">
        <Link href="/en">EN</Link>
        <Link href="/es">ES</Link>
      </div>
    </header>
  );
}