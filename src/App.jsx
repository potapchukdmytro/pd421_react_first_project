import "./App.css";
import BookCard from "./components/bookCard/BookCard";
import Counter from "./components/counter/Counter";
import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";

const booksGrid = {
    display: "grid", 
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "auto", 
    width: "75%", 
    padding: "25px",
    gap: "10px"
}

const books = [
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", cover: "https://static.yakaboo.ua/media/catalog/product/4/1/41_1_131.jpg" },
    { title: "Гаррі Поттер і таємна кімната", author: "Джоан Роулінг", cover: "https://static.yakaboo.ua/media/catalog/product/1/5/15267766_592426557609906_4550051225679019397_n.jpg" },
    { title: "Гаррі Поттер і в’язень Азкабану", author: "Джоан Роулінг", cover: "https://static.yakaboo.ua/media/catalog/product/4/1/41815_71113134.jpg" },
    { title: "Дюна", author: "Френк Герберт", cover: "https://books.google.com.ua/books/publisher/content?id=UxHLDgAAQBAJ&hl=uk&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3lIb99Dbm0exgGNnX9LQhXOVxcTA&w=1280" }
];

function App() {
    return (
        <>
            <Navbar />
            {/* <div style={booksGrid}>
            {/* <div style={booksGrid}>
                <BookCard title={books[0].title} author={books[0].author}  cover={books[0].cover} />
                <BookCard title={books[1].title} author={books[1].author}  cover={books[1].cover} />
                <BookCard title={books[2].title} author={books[2].author}  cover={books[2].cover} />
                <BookCard title={books[3].title} author={books[3].author}  cover={books[3].cover} />
            </div> */}
            <Counter />
            </div> */}

            <Counter />
        </>
    );
}

export default App;
