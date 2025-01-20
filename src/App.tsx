import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div style={{padding: 230}}></div>
      <About />
      <div style={{padding: 200}}></div>
    </div>
  )
}

export default App;
