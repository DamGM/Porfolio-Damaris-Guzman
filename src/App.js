import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Formation} from "./components/Formation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Formation/>
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
