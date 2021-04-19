import React from 'react';
import styles from "./FriendList.module.css"
const FriendList = ({friends}) => {
    const FriendListElements = friends.map(item => (
        <li className={item} key={item.id}>
            <span className={styles.status}>{item.isOnline}</span>
                <img className={styles.avatar} src={item.avatar} alt="" width="48" />
            <p className={styles.name}>{item.name}</p>
            </li>
    ))
    return (
        <ul class="friend-list">
            {FriendListElements}
        </ul>
    )
};

export default FriendList;