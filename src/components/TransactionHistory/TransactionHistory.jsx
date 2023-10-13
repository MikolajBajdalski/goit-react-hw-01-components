import React from 'react';
import PropTypes from 'prop-types'
import styles from '../TransactionHistory/TransactionHistory.module.css'

function TransactionHistory({ items }) {
    // Pobierz klucze z pierwszego obiektu w tablicy, ale pomijając 'id'
    const headers = Object.keys(items[0]).filter(key => key !== 'id');

    return (
        <table className={styles['transaction-history']}>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}>
                            {header.toUpperCase()}
                        </th>
                    ))}

                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        {headers.map(header => (
                            <td key={header}>
                                {header === 'type'
                                    ? item[header].charAt(0).toUpperCase() + item[header].slice(1)
                                    : item[header]}
                            </td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}

export default TransactionHistory
