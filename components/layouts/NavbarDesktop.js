import Image from "next/image";
import Link from "next/link";
import desktop from "components/layouts/NavbarDesktop.module.css";

function NavbarDesktop() {
  return (
    <>
      <nav className={desktop.nav}>
        <div className={desktop.frame}>
          <ul className={desktop.links_left}>
            <li className={desktop.links_li}>
              <Link href="/privatumzug-hamburg">
                <a>Privatumzüge</a>
              </Link>
            </li>
            <li className={desktop.links_li}>
              <Link href="/seniorenumzuege-hamburg">
                <a>Seniorenumzüge</a>
              </Link>
            </li>
            <li className={desktop.links_li}>
              <Link href="/bueroumzug-hamburg">
                <a>Büroumzüge</a>
              </Link>
            </li>
          </ul>
          <div className={desktop.logo}>
            <Link href="/" passHref tabIndex="0">
              <Image
                src="/schenck_hansen_umzugsunternehmen_logo.png"
                alt="Schenck & Hansen Umzugsunternehmen Logo"
                className={desktop.logo_img}
                width="500"
                height="119"
              ></Image>
            </Link>
          </div>
          <ul className={desktop.links_right}>
            <li className={desktop.links_li}>
              <Link href="/entruempelung-hamburg">
                <a>Entrümpelung</a>
              </Link>
            </li>
            <li className={desktop.links_li}>
              <Link href="/kontakt">
                <a className={desktop.none}>Kontakt</a>
              </Link>
            </li>
            <li className={desktop.links_li}>
              <a
                href="tel:040-664712"
                className={desktop.call}
                aria-label="Telefonummer Schenck & Hansen"
                tabIndex="0"
              >
                <div className={desktop.call_symbol}>
                  <Image
                    src="/phone.png"
                    alt="Telefonhörer"
                    layout="fill"
                  ></Image>
                </div>
                <p className={desktop.call_number}>040/664712</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarDesktop;
