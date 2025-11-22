import popcornImg from "../assets/popcorn-transparent.png"

export default function Header() {
    return (
      <header>
        <img 
          src={popcornImg} 
          alt="Cartoon popcorn with face" 
          className="app-logo"
        />
        <h1 className="app-title">PopChoice</h1>
      </header>
    )
}