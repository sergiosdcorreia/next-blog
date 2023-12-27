import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.12.2023 - </span>
                    <span className={styles.category}>Food</span>
                </div>
                <Link href="/">
                    <h1>A Post about food and cuisine.</h1>
                </Link>
                <p className={styles.desc}>
                    This is the post description.
                </p>
                <Link href="/" className={styles.link}>Read More...</Link>
            </div>
        </div>
    )
}

export default Card