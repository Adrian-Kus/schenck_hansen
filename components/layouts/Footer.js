import Image from "next/image";
import Link from "next/link";
import foot from "components/layouts/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={foot.frame}>
        <div className={foot.logo}>
          <div className={foot.logo__img}>
            <Image
              src="/logo_schenck_hansen_umzüge.png"
              alt="Logo Schenck & Hansen Umzugsunternehmen"
              width={1000}
              height={232}
            />
          </div>
        </div>

        <div className={foot.info}>
          <div className={foot.info__left}>
            <h5 className={foot.info__header}>Adresse:</h5>
            <p className={foot.info__text}>
              Bargkoppelweg 56
              <br />
              22145 Hamburg
            </p>
          </div>
          <div className={foot.info__right}>
            <h5 className={foot.info__header}>Öffnungszeiten:</h5>
            <p className={foot.info__text}>
              Montag - Freitag
              <br />
              8:30 - 17:00 Uhr
            </p>
          </div>
        </div>

        <div className={foot.top_line}></div>

        <div className={foot.links_left}>
          <ul>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-ahrensburg">
                <a>Umzug Ahrensburg</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-norderstedt">
                <a>Umzug Norderstedt</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-pinneberg">
                <a>Umzug Pinneberg</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-eimsbuettel">
                <a>Umzug Eimsbüttel</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-altona">
                <a>Umzug Altona</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={foot.links_middle}>
          <ul>
            <li className={foot.links__li}>
              <Link href="/entruempelung-hamburg-eimsbuettel">
                <a>Entrümpelung Eimsbüttel</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/kleintransporte-hamburg">
                <a>Kleintransporte</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/moebelmontage-hamburg">
                <a>Möbelmontage</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/moebelspedition-hamburg">
                <a>Möbelspedition</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/moebeltransport-hamburg">
                <a>Möbeltransport</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={foot.links_right}>
          <ul>
            <li className={foot.links__li}>
              <Link href="/umzugsunternehmen-hamburg-kosten">
                <a>Was kostet ein Umzug?</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/entruempelung-preise-hamburg">
                <a>Was kostet eine Entrümpelung?</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/umzug-hamburg-festpreis">
                <a>Umzug zum Festpreis</a>
              </Link>
            </li>
            <li className={foot.links__li}>
              <Link href="/bundeswehrumzug">
                <a>Bundeswehrumzüge</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={foot.bottom_line}></div>

        <div className={foot.legal}>
          <p className={foot.legal__copyright}>
            &#169; 2023 Schenck & Hansen KG
          </p>
          <ul className={foot.legal__links}>
            <li className={foot.legal__links_li}>
              <Link href="/impressum">
                <a>Impressum</a>
              </Link>
            </li>
            <li className={foot.legal__links_li}>
              <Link href="/datenschutz">
                <a>Datenschutz</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
