import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Header(activeLink) {
  const router = useRouter();
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
            <Link href="/" className={router.pathname == "/" ? "hover:underline active" : "hover:underline"}>
              Events Calendar
            </Link>
          </li>
          <li>
            <Link href="/rules" className={router.pathname == "/rules" ? "hover:underline active" : "hover:underline"}>
              Rules
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
