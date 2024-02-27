import data from '../data/data.json';
import React from'react';
import { useState } from 'react';
import styles from './card.module.css';
import Cardbutton from '../cardbutton/Cardbutton';

function Card () {
  return (
    <div className={styles.container}>
        <p className={styles.term}>{data[2].english}</p>
        <p className={styles.transcript}>{data[2].transcription}</p>
        <Cardbutton/>
        <p className={styles.translation}>{data[2].russian}</p>
    </div>
    );
}
export default Card;