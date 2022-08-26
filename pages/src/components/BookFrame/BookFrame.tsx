import React, { useEffect, useState } from 'react'
import Cover from '../Cover/Cover'
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'
import styles from './BookFrame.module.scss'

export enum Pages {
    COVER,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    ELEVEN,
    TWELVE,
    THIRTEEN,
    FOURTEEN,
    FIFTEEN,
    SIXTEEN,
    AKNOWLEDGMENT
}

const BookFrame = () => {
    const [page, setPage] = useState<Pages>(Pages.COVER)

    // const renderPage = () => {
    //     switch(page){
    //         case Pages.COVER:
    //             return <Cover/>
    //             default:
    //                  return null
    //     }
    // }

    const preventDefault = (event) => {
        event.preventDefault()
    }

    useEffect(()=>{
        document.addEventListener('contextmenu', preventDefault);
       return document.removeEventListener('contextmenu', preventDefault);
    },[])

    return(
        <div className={styles.frame}>
         <Cover/>
         <PageOne/>
         <PageTwo/>
        </div>
    )
}

export default BookFrame