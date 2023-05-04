import Container from "./Container"
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'


function NavBar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li><a href="/"><img src={logo} alt="Costs"></img></a></li>
                    <li className={styles.item}><a href="/">Home</a></li>
                    <li className={styles.item}><a href="/contato">Contato</a></li>
                    <li className={styles.item}><a href="/company">Empresa</a></li>
                </ul>
            </Container>       
        </nav>
    )
}

export default NavBar