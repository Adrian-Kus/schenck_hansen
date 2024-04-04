import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mobile from "components/layouts/NavbarMobile.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";

function Links(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <>
      <div className={mobile.link_section}>
        <LayoutGroup>
          <ul className={mobile.links}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
              layout
              onClick={() => props.isMoble && props.closeMobileMenu()}
              className={mobile.links_li}
            >
              <Link href="/privatumzug-hamburg">
                <a>Privatumzüge</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              layout
              onClick={() => props.isMoble && props.closeMobileMenu()}
              className={mobile.links_li}
            >
              <Link href="/seniorenumzuege-hamburg">
                <a>Seniorenumzüge</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              layout
              onClick={() => props.isMoble && props.closeMobileMenu()}
              className={mobile.links_li}
            >
              <Link href="/bueroumzug-hamburg">
                <a>Büroumzüge</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.4 }}
              layout
              onClick={() => props.isMoble && props.closeMobileMenu()}
              className={mobile.links_li}
            >
              <Link href="/entruempelung-hamburg">
                <a>Entrümpelung</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.5 }}
              layout
              onClick={() => props.isMoble && props.closeMobileMenu()}
              className={mobile.links_li}
            >
              <Link href="/kontakt">
                <a className={mobile.none}>Kontakt</a>
              </Link>
            </motion.li>
          </ul>
        </LayoutGroup>
      </div>
    </>
  );
}

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <IoMdMenu onClick={() => setOpen(!open)} className={mobile.hamburger} />
  );
  const closingIcon = (
    <IoMdClose onClick={() => setOpen(!open)} className={mobile.hamburger} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className={mobile.nav}>
        <div className={mobile.frame}>
          <div className={mobile.logo}>
            <Link href="/" passHref tabIndex="0">
              <Image
                src="/schenck_hansen_umzugsunternehmen_logo.png"
                alt="Schenck & Hansen Umzugsunternehmen Logo"
                className={mobile.logo_img}
                width="500"
                height="119"
              ></Image>
            </Link>
          </div>
          <div className={mobile.left}>
            <a
              href="tel:040-664712"
              className={mobile.call}
              aria-label="Telefonummer Schenck & Hansen"
              tabIndex="0"
            >
              <div className={mobile.call_symbol}>
                <Image
                  src="/phone.png"
                  alt="Telefonhörer"
                  layout="fill"
                ></Image>
              </div>
              <p className={mobile.call_number}>040/664712</p>
            </a>
            <div>{open ? closingIcon : hamburgerIcon}</div>
          </div>
        </div>
        {open && <Links isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </>
  );
}

export default MobileNavigation;
