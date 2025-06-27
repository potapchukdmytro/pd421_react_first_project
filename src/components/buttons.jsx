export function CircleButton({text}) {
    return (
        <button style={{borderRadius: "50%"}}>{text}</button>
    )
}

export function SquareButton({text}) {
    return (
        <button>{text}</button>
    )
}