import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div>
                <h1>Title</h1>
                <h3>Subtitle</h3>
                <p className="read-the-docs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid at magnam maiores, excepturi similique sint deleniti
                    amet, est atque facere sit fuga tempore natus, corporis
                    praesentium! Facere doloribus debitis dolorem!
                </p>
            </div>
            <div>
                <button>Click me</button>
            </div>
            <Footer />
        </>
    );
}

export default App;
