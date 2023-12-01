
import styles from './page.module.css'
import Image from 'next/image'
import hero from 'public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design dor your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See Out Works</button>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
    </main>
  )
}
