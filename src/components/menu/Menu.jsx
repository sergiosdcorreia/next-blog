import React from "react";
import styles from "./menu.module.css"
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
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
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
            </div>
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editor picks</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
        </div>
    )
}

export default Menu