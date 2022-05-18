import "./App.css";
import Contact from "./Components/button";
import Logo from "./Components/logo";
import Links from "./Components/links";

function App() {
  let p_link = [{ name: "Services" }, { name: "Projects" }, { name: "About" }];
  return (
    <div className="App">
      <div className="navbar">
        <Logo />
        <div className="container">
          {p_link.map((navs) => (
            <div>
              <Links {...navs} />
            </div>
          ))}
        </div>

        <Contact/>
      </div>
    </div>
  );
}

export default App;