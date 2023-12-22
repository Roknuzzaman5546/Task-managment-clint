import Userdetails from "../Main/Userdetails";
import About from "./About";
import Banner from "./Banner";

const Home = () => {

    return (
        <div>
            <Banner></Banner>          
            <Userdetails></Userdetails>  
            <About></About>
        </div>
    );
};

export default Home;