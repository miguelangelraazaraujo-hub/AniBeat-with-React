import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";

function ExampleList() {
    return(
        <>
            <Header />
            <p>List of example</p>
            <ul>
                <li>example1</li>
                <li>example2</li>
                <li>example3</li>
            </ul>
            <Footer />
        </>
    )
}

export default ExampleList;