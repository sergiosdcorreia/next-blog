import React from "react";
import styles from "./featured.module.css"
import Image from "next/image"

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Sergio dev here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.pstTitle}>This is the post title.</h1>
                <p className={styles.postDesc}>This is the post description</p>
                <button className={styles.button}>Read More...</button>
            </div>
        </div>
    )
}

export default Featured