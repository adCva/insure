import "./Reset.css";
import "./Scss/style.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";



function App() {
  return (
    <div>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <Blog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;