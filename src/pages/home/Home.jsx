import "./Home.css"
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handClick = () => {
        navigate("/Contact");
    }

    return(
        <>
            <Header />
            <HeaderMobile />
            <p>Welcome page to the project AniBeat</p>
            <button onClick={handClick}>Go to Contacts</button>
            <Footer />
        </>
    );
}

export default Home