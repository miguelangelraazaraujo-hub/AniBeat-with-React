import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handClick = () => {
        navigate("/Contacts");
    }

    return(
        <>
            <Header />
            <p>Welcome page to the project AniBeat</p>
            <button onClick={handClick}>Go to Contacts</button>
            <Footer />
        </>
    );
}

export default Home