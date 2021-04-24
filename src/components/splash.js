import * as React from "react";
import { motion } from "framer-motion";

const Splash = () => {
    return (
        <motion.div
            animate={{opacity: 0}}
            transition={{delay: 6}}
        >
            <motion.h1
                initial={{y: "-50vh", opacity: 0}}
                animate={{y: "25vh", opacity: 1}}
                transition={{duration: 2, type: "spring", stiffness: 200}}
            >
                Hola babe UwU
            </motion.h1>
            <motion.h2
                initial={{y: "-50vh", opacity: 0}}
                animate={{y: "26vh", opacity: 1}}
                transition={{delay: 1, duration: 2, type: "spring", stiffness: 125}}
            >
                Bueno, parece que hace un ano que estamos juntos :o
        </motion.h2>
      </motion.div>
    );
};

export default Splash;