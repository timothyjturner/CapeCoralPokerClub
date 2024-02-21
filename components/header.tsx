import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="ccpc-header mt-10">
      <Link href="/">
        <figure className="ccpc-header__logo mx-auto my-4 mt-2 flex justify-center">
          <Image
            src="images/ccpc-logo.svg"
            width={200}
            height={200}
            alt="Cape Coral Poker Club Logo "
          />
        </figure>
      </Link>
      <nav className="ccpc-nav">
        <ul className="flex gap-4 mx-auto text-center w-fit text-lg">
          <li>
            <Link href="/events" className="hover:underline active">
              Events Calendar
            </Link>
          </li>
          <li>
            <Link href="/rules" className="hover:underline">
              Rules
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
