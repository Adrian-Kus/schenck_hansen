import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function SeniorenFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Seniorenumzug Hamburg - Faq
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
                title="Welche Leis&shy;tun&shy;gen umfasst ein typischer Senioren&shy;umzug?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Unsere Senioren&shy;um&shy;züge machen es Menschen im hohen
                    Alter so ein&shy;fach und be&shy;quem wie möglich. Aus
                    diesem Grund haben wir uns lange Gedanken gemacht, wie wir
                    mit unseren Um&shy;zugs&shy;leis&shy;tungen Ihr Leben
                    ein&shy;facher machen können.
                  </p>
                  <p className={faq.answer__first}>
                    Folgende Leistungen be&shy;in&shy;haltet ein typischer
                    Seni&shy;oren&shy;umzug:
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      Organisation von Halteverbotszonen
                    </li>
                    <li className={faq.answer__list_li}>
                      Einpackservice: Wir ver&shy;packen Ihr gesamtes
                      klein&shy;teiliges Hab und Gut in Um&shy;zugs&shy;kartons
                    </li>
                    <li className={faq.answer__list_li}>
                      Schutzverpacken: Wir schützen Ihr gesamtes
                      Mo&shy;bi&shy;liar und das große Um&shy;zugs&shy;gut mit
                      dafür vor&shy;gesehenem Schutz&shy;material und
                      Möbel&shy;decken
                    </li>
                    <li className={faq.answer__list_li}>
                      Abbau von Mobiliar: Ihr Mo&shy;bi&shy;liar wird
                      fach&shy;gerecht demontiert, sodass das Mo&shy;bi&shy;liar
                      sicher trans&shy;por&shy;tiert werden kann
                    </li>
                    <li className={faq.answer__list_li}>
                      Abschluss von Decken- und Wand&shy;lampen
                    </li>
                    <li className={faq.answer__list_li}>
                      Abschluss von Wasch&shy;maschine / Geschirr&shy;spüler
                    </li>
                    <li className={faq.answer__list_li}>
                      Sicherer Transport: Unsere Packer verstauen Ihr
                      Eigen&shy;tum sicher auf den LKWs
                    </li>
                    <li className={faq.answer__list_li}>
                      Entladung am Ziel&shy;ort: Wir stellen das
                      Mo&shy;bi&shy;liar nach Ihren Wünschen auf
                    </li>
                    <li className={faq.answer__list_li}>
                      Aufbau von Mobiliar: Das vorab demontierte
                      Mo&shy;bi&shy;liar wird wieder sicher und stand&shy;fest
                      auf&shy;gebaut
                    </li>
                    <li className={faq.answer__list_li}>
                      Anschluss von Decken- und Wand&shy;lampen
                    </li>
                    <li className={faq.answer__list_li}>
                      Anschluss von Waschmaschine / Geschirr&shy;spüler
                    </li>
                    <li className={faq.answer__list_li}>
                      Auspackservice: Wir packen die vorab durch uns
                      ein&shy;ge&shy;packten Um&shy;zugs&shy;kartons wieder für
                      Sie aus
                    </li>
                  </ul>
                  <p className={faq.answer__first}>
                    Optional bieten wir zu&shy;sätz&shy;lich folgende
                    Leis&shy;tungen an:
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      Entrümpelung: Wir entsorgen Dinge, die Sie nicht mehr
                      benötigen
                    </li>
                    <li className={faq.answer__list_li}>
                      Schließen von alten Dübel&shy;löchern in der
                      Aus&shy;zugs&shy;adresse
                    </li>
                    <li className={faq.answer__list_li}>
                      Entfernen von Teppich&shy;böden, PVC-Böden und Laminat
                    </li>
                    <li className={faq.answer__list_li}>
                      Aufhängservice für Bilder, Spiegel und weitere
                      De&shy;ko&shy;ra&shy;tionsgegen&shy;stände
                    </li>
                  </ul>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Was kostet ein Senioren&shy;umzug in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten eines typischen Seni&shy;oren&shy;um&shy;zugs
                    be&shy;gin&shy;nen ab 1.500 Euro. Je größer der Auf&shy;wand
                    bzw. je mehr ge&shy;macht werden muss, desto höher fallen
                    die damit ver&shy;bundenen Um&shy;zugs&shy;kosten aus.
                  </p>
                  <p className={faq.answer__first}>
                    Kontaktieren Sie uns und ver&shy;ein&shy;baren einen
                    Be&shy;sichti&shy;gungs&shy;termin, sodass wir Ihnen Ihr
                    persön&shy;liches Um&shy;zugs&shy;an&shy;gebot für Ihren
                    Seni&shy;oren&shy;umzug mit Fest&shy;preis erstellen können.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Bietet Schenck &amp; Hansen einen Festpreis?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, für die auf&shy;ge&shy;führten Leis&shy;tungen haben
                    unsere Um&shy;zugs&shy;an&shy;gebote für Senioren&shy;umzüge
                    ver&shy;bind&shy;liche Fest&shy;preise.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Entrümpelt Schenck &amp; Hansen nicht benötigte Gegenstände?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, gerne entrümpeln wir die Gegen&shy;stände, die Sie nicht
                    mehr mit um&shy;ziehen möchten.
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

export default SeniorenFaq;
