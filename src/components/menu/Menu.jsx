import React from "react";
import styles from "./menu.module.css"
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} />
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
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu