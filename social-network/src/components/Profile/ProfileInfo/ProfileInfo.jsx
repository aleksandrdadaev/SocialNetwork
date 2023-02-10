import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.header}>
			<img
				src={props.profile.photos.large}
				className={styles.photo}
				alt='Photo'
			/>
			<div className={styles.info}>
				<h2 className={styles.name}>{props.profile.fullName}</h2>
				<ProfileStatus status={'Hello my friends'} />
			</div>
		</div>
	);
};

export default ProfileInfo;
