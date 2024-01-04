"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css"

const ThemeToggle = () => {

    const { toggle, theme } = useContext(ThemeContext)

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === "dark"
                    ? { background: "white" }
                    : { background: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === "dark"
                        ? { left: 3, background: "#0f172a" }
                        : { right: 3, background: "white" }
                }
            ></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle