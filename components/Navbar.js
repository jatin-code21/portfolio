import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from 'react';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className={styles.header}>
            <Link href="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={styles.navMenu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/project">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)
                }
            </div>
        </div>
    )
}

export default Navbar

// const Navbar = () => {
//     return (
//         <div className={styles.header}>
//             <div className={styles.navContainer}>
//                 <ul className={styles.listbox}>
//                     <li className={styles.listElement}>
//                         <Link href="/" legacyBehavior>
//                             <a className={styles.listText}>Home</a>
//                         </Link>
//                     </li>
//                     <li className={styles.listElement}>
//                         <Link href="/about" legacyBehavior>
//                             <a className={styles.listText}>About</a>
//                         </Link>
//                     </li>
//                     <li className={styles.listElement}>
//                         <Link href="/about" legacyBehavior>
//                             <a className={styles.listText}>Projects</a>
//                         </Link>
//                     </li>
//                     <li className={styles.listElement}>
//                         <Link href="/about" legacyBehavior>
//                             <a className={styles.listText}>Contact</a>
//                         </Link>
//                     </li>

//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar
