import "./Navbar.css";
import {CircleButton, SquareButton} from "./../buttons";

const linkStyle = {
    textDecoration: "none", 
    color: "white"
};

function Navbar() {
    const booksLink = "Книги";

    return (
        <div
            style={{
                backgroundColor: "#3A3A3A",
                display: "flex",
                height: "65px",
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <a href="#" style={linkStyle}>{booksLink}</a>
            <a href="#" style={linkStyle}>Автори</a>
            <a href="#" style={linkStyle}>Про нас</a>
            <a href="#" style={linkStyle}>Контакти</a>
            <CircleButton text="Rounded"/>
            <SquareButton text="Rectangle"/>
        </div>
    );
}

export default Navbar;