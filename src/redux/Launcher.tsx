import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Launcher() 
{
    return (<>
                <Link to="/home">Home</Link> { " | "}
                <Link to="/about">About</Link> { " | "}
                <Link to="/contact">Contact</Link> { " | "}

                <hr></hr>

                <Routes>
                     <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </>);
}

export default Launcher;