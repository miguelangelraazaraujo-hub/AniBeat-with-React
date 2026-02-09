import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const myArray = ['Apple', 'Banana', 'Cherry'];

export default function News(){
    return(
        <>
        <Header />
        {myArray.map((item, index) => { return <p key={index}>{item}</p> })}
        <Footer />
        </>
    );
}