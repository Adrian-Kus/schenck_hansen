import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function PrivatFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Hamburg - Faq
          </motion.h2>
          <motion.p className={faq.subheader} layout>
            Sie haben Fragen?
            <br />
            Wir haben Antworten.
          </motion.p>
          <div className={faq.frame}>
            <AnimatePresence>
              <FaqToggle
                number="01."
                title="Wie kann ich mein Umzugs&shy;angebot erhalten?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Je nach persönlichem Ge&shy;schmack bieten wir Ihnen 5
                    Mög&shy;lich&shy;keiten, um ein An&shy;ge&shy;bot für Ihren
                    Privat&shy;um&shy;zug in Hamburg zu erstellen:
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      Online-Umzugsrechner
                    </li>
                    <li className={faq.answer__list_li}>
                      Online-Videobesichtigung
                    </li>
                    <li className={faq.answer__list_li}>
                      Freie Auflistung aller Trans&shy;port&shy;güter mit Maßen
                      sowie An&shy;gaben zu vor Ort Be&shy;geben&shy;heiten
                    </li>
                    <li className={faq.answer__list_li}>
                      Vor-Ort Besichtigungstermin
                    </li>
                    <li className={faq.answer__list_li}>
                      Tagespauschale (keine ge&shy;naueren Angaben notwendig)
                    </li>
                  </ul>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Liefert Schenck &amp; Hansen Umzugs&shy;materialien im Voraus?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie für Ihren Privat&shy;umzug in Hamburg nicht unseren
                    Ein&shy;pack&shy;ser&shy;vice in An&shy;spruch nehmen
                    möchten, stellen wir Ihnen natür&shy;lich gerne das
                    not&shy;wendige Um&shy;zugs&shy;material in
                    aus&shy;reichender Menge zur Verfügung.
                  </p>
                  <p className={faq.answer__first}>
                    Neben den klas&shy;sischen Um&shy;zugs&shy;kartons,
                    Akten&shy;kartons, Geschirr&shy;kartons und
                    Bücher&shy;kartons bieten wir Kleider&shy;boxen für
                    Hänge&shy;gar&shy;de&shy;robe an. Alle
                    Um&shy;zugs&shy;kartons können inner&shy;halb Hamburgs
                    sowohl ge&shy;mietet als auch ge&shy;kauft werden.
                    Außer&shy;halb Hamburgs bieten wir nur den Verkauf an.
                  </p>
                  <p className={faq.answer__first}>
                    Selbstverständlich ver&shy;sorgen wir Sie auch mit
                    aus&shy;reichend Ver&shy;packungs&shy;material wie
                    Pack&shy;seiden&shy;papier, Luft&shy;polster&shy;folie,
                    Ma&shy;trat&shy;zen&shy;schutz&shy;hüllen etc.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Bietet Schenck &amp; Hansen Fest&shy;preise an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, wir bieten Um&shy;zugs&shy;an&shy;gebote zum
                    Fest&shy;preis an.
                  </p>
                  <p className={faq.answer__first}>
                    Zusätzlich können Sie bei Bedarf weitere
                    Zu&shy;satz&shy;leis&shy;tungen hinzu&shy;buchen, die nach
                    tat&shy;säch&shy;lichem Zeit&shy;auf&shy;wand
                    ab&shy;gerech&shy;net werden. Dies er&shy;mög&shy;licht
                    Ihnen noch mehr Flexi&shy;bili&shy;tät. So kann
                    bei&shy;spiels&shy;weise flexi&shy;bel am
                    Um&shy;zugs&shy;tag Ein&shy;pack&shy;service ge&shy;bucht
                    werden, wenn Sie vorab nicht alle Um&shy;zugs&shy;kartons
                    selbst ein&shy;packen konnten oder zu&shy;sätz&shy;lich noch
                    weitere Decken&shy;lampen de- und montiert werden.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </>
  );
}

export default PrivatFaq;
