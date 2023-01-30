import React, { useState } from "react";
import ReactElasticCarousel from "react-elastic-carousel";

import styles from "./Serve.module.css";
import data from "../../../data.json";
import Modal from "./Modal";

const Serve = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState('')
    const showModal = (data) => {
        document.getElementById("cards").scrollIntoView()
        setIsOpen(!isOpen);
        document.querySelector('body').style.overflow = 'hidden';
        setModalData(data)
    }
    const closeModal = () => {
        setIsOpen(false);
        document.querySelector('body').style.overflow = 'inherit';
    }
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2 },
        { width: 1400, itemsToShow: 4, itemsToScroll: 2 }
    ]
    return(
        <section className={`${styles.service_section}`} id="cards">
            <ReactElasticCarousel  breakPoints={breakPoints} pagination={false} itemsToScroll={1}>
                {
                    data.serveCards.map((e) => {
                        return(
                            <div key={e.id} className={styles.service_carousel}>
                                <div className={styles.service_cards}>
                                    <div className={styles.service_title}>
                                        <h2>{e.title}</h2>
                                        <p>{e.price} <span>{e.havePrice ? 'azn' : ''}</span></p> 
                                    </div>
                                    <div className={styles.serve_description}>
                                        <p>{e.text}</p>
                                        {e.details ? <button onClick={() => showModal(e)}>Подробнее</button> : ''}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ReactElasticCarousel>
            {isOpen ? <Modal {...modalData} opened = {isOpen} close = {closeModal}/> : ''}
        </section>
    )
}

export default Serve;