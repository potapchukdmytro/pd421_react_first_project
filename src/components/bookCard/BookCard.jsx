const cardStyle = {
    border: "1px solid white",
    borderRadius: "10px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px"
}

function BookCard(props) {
    const {title, author, cover} = props;

    return (
        <div style={cardStyle}>
            <img width="200px" src={cover} alt={title}/>
            <h2 style={{textAlign: "center"}}>{title}</h2>
            <h3>{author}r</h3>
        </div>
    );
}

export default BookCard;