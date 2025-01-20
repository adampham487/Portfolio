import splitStringUsingRegex from "../../utils/splitStringUsingRegex";
import {motion} from "framer-motion";

const heading = "Hello World,"
const im = "I'm"
const name = "Adam"
const text = "| Frontend Developer | Information Technology | Systems Admin |"

const charVariants = {
    hidden: {opacity: 0},
    reveal: {opacity: 1},
};

export default function Home() {
    const headingChars = splitStringUsingRegex(heading);
    const imChar = splitStringUsingRegex(im);
    const nameChars = splitStringUsingRegex(name);
    const textChars = splitStringUsingRegex(text);

    console.log("Simple split: ", text.split(""));

    return (
    <div className="home">

        <motion.h1 
        initial="hidden"
        whileInView="reveal"
        transition={{staggerChildren: .05}}
        >{headingChars.map(char => (
            <motion.span key={char} transition={{duration: 1}} variants={charVariants}>
                {char}
                </motion.span>
        ))}</motion.h1>


        <motion.h2
        initial="hidden"
        whileInView="reveal"
        transition={{staggerChildren: .13}}
        >{imChar.map(char => (
            <motion.span key={char} transition={{duration: 1}} variants={charVariants}>{
                char}
                </motion.span>
        ))} <span className="highlight">{nameChars.map(char => (
            <motion.span key={char} transition={{duration: 1}} variants={charVariants}>
                {char}
                </motion.span>
        ))}</span> </motion.h2>


        <motion.h3
        initial="hidden"
        whileInView="reveal"
        transition={{staggerChildren: .015}}>{textChars.map(char => (
            <motion.span key={char} transition={{duration: 1}} variants={charVariants}>
            {char}
            </motion.span>
        ))}</motion.h3>
        </div>
    )
}