import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.header}>
			<img src={props.profile.photos.large} className={styles.photo} />
			<div className={styles.info}>
				<h2 className={styles.name}>{props.profile.fullName}</h2>
				<p className={styles.status}>{props.profile.aboutMe}</p>
			</div>
		</div>
	);
};

export default ProfileInfo;
