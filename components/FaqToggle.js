import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import faqtog from "styles/FaqToggle.module.css";
import Minus from "components/Minus";
import Plus from "components/Plus";

const FaqToggle = ({ children, number, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <LayoutGroup>
        <motion.div
          className={faqtog.container}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <motion.p className={faqtog.number} layout>
            {number}
          </motion.p>
          <motion.div layout className={faqtog.title}>
            <motion.h3 layout>{title}</motion.h3>
          </motion.div>
          <motion.div layout className={faqtog.symbol}>
            {toggle ? <Minus /> : <Plus />}
          </motion.div>
          <motion.div layout className={faqtog.movable}>
            {toggle ? children : ""}
            <motion.div layout className={faqtog.line}></motion.div>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </>
  );
};

export default FaqToggle;
