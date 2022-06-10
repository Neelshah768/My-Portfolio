import Header from "../Header/Header";
import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="Home">
        <p id="welcome">Welcome</p>
        <h1 id="myName">I'm <span id="Neel">Neel</span> Shah</h1>
        <p id="skills">Front-end Web Developer</p>
      </div>
    </div>
  );
};

export default Home;
