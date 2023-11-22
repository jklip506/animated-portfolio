import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section><Navbar /></section>
    <section id="Services">Paralax</section>
    <section>Services</section>
    <section id="Portfolio">Paralax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
