import styles from '../styles/About.module.css'
import Instagram from '../public/instagram.png'
import Image from 'next/image'
import Linkedin from '../public/linkedin.png'
import Github from '../public/github.png'

const About = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.iLeft}>
        <div className={styles.iText}>
          <span className={`${styles.span}`}>Hy! I Am</span>
          <span className={`${styles.span}`}>Jatin Oza</span>
          <span className={`${styles.span}`}>Competitive programmer with high experience in Problem Solving. I am a Blockchain Enthusiast who aim is to create a create a NFTs regarding the Competitive Programming</span>
        </div>

        <button className={`${styles.button} ${styles.iButton} ${styles.btn}`}>Resume</button>
        <div className={styles.iIcons}>
          <Image
            src={Instagram}
          />
          <Image
            src={Linkedin}
          />
          <Image
            src={Github}
          />
        </div>
      </div>
      <div className={styles.iRight}>
        <span>I am right side</span>
      </div>
    </div>
  )
}

export default About