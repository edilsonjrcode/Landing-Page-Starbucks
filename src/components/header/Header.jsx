import '../../scss/Header.scss'

export default function Header(){
    return(
        <>
            <header>
                <img src="/logo-starbucks.svg" alt="Logo Starbucks" />
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Menu</a>
                    <a href="/">O que há de novo?</a>
                    <a href="/">Contatos</a>
                </nav>
            </header>
        </>
    )
}