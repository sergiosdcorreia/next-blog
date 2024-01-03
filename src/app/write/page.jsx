"use client"

import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className={styles.container}>
            <input className={styles.input} type='text' placeholder='Title' />
            <div className={styles.editor}>
                <button className={styles.button} onClick={()=>setOpen(!open)}>
                    <Image src="/p1.jpeg" alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/p1.jpeg" alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/p1.jpeg" alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/p1.jpeg" alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    )
}

export default WritePage