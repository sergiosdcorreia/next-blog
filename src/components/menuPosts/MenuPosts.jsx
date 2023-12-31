import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
    return (
        <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.12.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.12.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.12.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <p className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.12.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default MenuPosts