import logo from "./logo.png"

export default function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo"></img>

            <nav className="navlinks">
                <a href="">Home</a>
                <a href="/About">About</a>
                <a href="/Projects">Projects</a>
                <a href="/Skills">Skills</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    )
}