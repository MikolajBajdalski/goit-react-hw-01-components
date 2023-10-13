import React from 'react';
import PropTypes from 'prop-types'
import styles from '../FriendList/FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles.item}>
            <span className={styles.status} style={{ color: isOnline ? 'green' : 'red' }}>&#183;</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

function FriendList({ friends }) {
    return (
        <ul className={styles['friend-list']}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
};

export default FriendList;
