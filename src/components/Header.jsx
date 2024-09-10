export default function Header({ image, title, children }) {
    return (
        <header id="header">
            <img src={image} />
            <h1>{title}</h1>
            {children}
        </header>
    )
}