import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntrEimsFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Entrümpelung Hamburg Eimsbüttel - Faq
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
                title="Was kostet eine Entrümpelung in Hamburg Eims&shy;büttel?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten einer Entrümpelung in Eims&shy;büttel richten
                    sich vor allem nach der Ent&shy;sor&shy;gungs&shy;menge, den
                    Lauf&shy;wegen sowie der Etage aus dem das
                    Ent&shy;sor&shy;gungs&shy;gut abgeholt wird.
                    Kleinst&shy;mengen begin&shy;nen bei 150,00 Euro bzw. 300,00
                    Euro, je nachdem ob 1 oder 2 Mit&shy;arbeiter benötigt
                    werden.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Wie kurzfristig bietet Schenck &amp; Hansen Termine an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Je größer das Vorhaben, desto früher sollte die Planung
                    beginnen. Wir ermög&shy;lichen unseren Kunden bei
                    vor&shy;han&shy;denen Kapa&shy;zitäten aber auch
                    kurz&shy;fristig, teilweise sogar am nächsten Tag,
                    Entrümpe&shy;lungen in Eims&shy;büttel durch&shy;zuführen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Entfernt Schenck &amp; Hansen auch alte Fußbodenbeläge?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wir bieten die besenreine Übergabe Ihrer
                    Räum&shy;lich&shy;keiten an. Darüber hinaus entfernen wir
                    auch Wunsch auch Boden&shy;beläge wie Teppiche oder PVC.
                    Selbst wenn diese verklebt sind kann unser erfahrenes
                    Fach&shy;personal die Ent&shy;fernung dieser
                    Boden&shy;beläge für Sie aus&shy;führen, sodass Sie
                    sorgen&shy;frei und problem&shy;los das Objekt
                    über&shy;geben können.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle number="04." title="Wie läuft eine Entrümpelung ab?">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Entrümpelungen werden vorab mit dem Kunden besprochen und
                    können flexibel gestaltet werden. Entweder wird ein Angebot
                    nach Aufwand oder auf Basis vorheriger Besichtigung
                    erstellt.
                  </p>
                  <p className={faq.answer__first}>
                    Die schnellste und flexibelste Möglich&shy;keit ist die
                    Beauftragung nach Aufwand. In diesem Fall stellen wir Ihnen
                    für alle anfal&shy;lenden
                    Ent&shy;rümpe&shy;lungs&shy;arbeiten Mit&shy;arbeiter und
                    Fahr&shy;zeuge zum Abtrans&shy;port zur Verfügung.
                  </p>
                  <p className={faq.answer__first}>
                    Die alternative dazu ist der Besichti&shy;gungs&shy;termin.
                    Wenn Sie vorab mehr Zeit haben, dann bieten wir einen
                    digitalen Besichti&shy;gungs&shy;termin mit 5% Rabatt oder
                    einen vor Ort Besichti&shy;gungs&shy;termin innerhalb
                    Hamburgs zum regulären Tarif an. In diesem Fall besprechen
                    Sie im Detail Ihr Vorhaben mit einem Berater und dieser
                    erstellt für das besprochene Vorhaben ein Angebot.
                  </p>
                  <p className={faq.answer__first}>
                    Bei kleineren Vorhaben können Sie uns auch per E-Mail oder
                    tele&shy;fonisch über die Gegen&shy;stände aufklären die zu
                    ent&shy;sorgen sind und wir erstellen Ihnen dazu passend ein
                    Angebot.
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

export default EntrEimsFaq;
