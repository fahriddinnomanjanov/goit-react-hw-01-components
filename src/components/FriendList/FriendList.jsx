import React from 'react';
import styles from "./FriendList.module.css"
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
    const FriendListElements = friends.map(item => (
        <li className={styles.item} key={item.id}>
            <span className={`${styles.status} ${item.isOnline ? styles.active : ""}`}>{item.isOnline}</span>
                <img className={styles.avatar} src={item.avatar} alt="" width="48" />
            <p className={styles.name}>{item.name}</p>
            </li>
    ))
    return (
        <ul className={styles.friendList}>
            {FriendListElements}
        </ul>
    )
};
FriendList.defaultProps = {
    friends: [],
}

FriendList.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
}

export default FriendList;