import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ stats }) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>UPLOAD STATS</h2>

            <ul className={styles.statList}>
                {stats.map((item, index) => (
                    <li key={index} className={styles.item} style={{ backgroundColor: getRandomColor() }}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage + '%'}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Statistics;
