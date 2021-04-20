import React from 'react';
import styles from "./Statistics.module.css"

import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
    const statisticElements = stats.map(item => (
        <li className={styles.item} key={item.id} >
            <span className={styles.label}>{ item.label }</span>
            <span className={styles.percentage}>{item.percentage}</span>
        </li>)
    );
    return (

    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statsList}>
        {statisticElements}
        </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}


export default Statistics;