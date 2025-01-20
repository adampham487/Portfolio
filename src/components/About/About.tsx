import Typewriter from "typewriter-effect"

const aboutText:string = (
    "<p>I am currently a student at Metro State University, pursuing my degree in IT. <br /> My interests include frontend development, building computers, and anything IT related.</p>"
)

export default function About() {
    return (
    <div className="about">
        <h4>About Me</h4>
        <Typewriter
        options={{
            strings: aboutText,
            autoStart: true,
            delay: 40,
            loop: false,
            cursor: "",
        }}></Typewriter>
        


        </div>
    )
}
