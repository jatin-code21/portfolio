import styles from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navContainer}>
                <ul className={styles.listbox}>
                    <li className={styles.listElement}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.listText}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.listElement}>
                        <Link href="/about" legacyBehavior>
                            <a className={styles.listText}>About</a>
                        </Link>
                    </li>
                    <li className={styles.listElement}>
                        <Link href="/about" legacyBehavior>
                            <a className={styles.listText}>Projects</a>
                        </Link>
                    </li>
                    <li className={styles.listElement}>
                        <Link href="/about" legacyBehavior>
                            <a className={styles.listText}>Contact</a>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
