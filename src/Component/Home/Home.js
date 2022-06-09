import Header from "../Header/Header";
import './Home.css';
const Home = (props) => {
    return ( 
        <div>
                <Header />
                <div className="Home">
                    <div>
                    <p id="welcome">Welcome</p>
                    <h1>I'm Neel Shah</h1>
                    <p>Front-end Web Developer</p>
                    </div>
                </div>
        </div>
     );
}
 
export default Home;