import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import userPhoto from '../../Users/user.png';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.header}>
			<img
				src={
					props.profile.photos.large !== null
						? props.profile.photos.large
						: userPhoto
				}
				className={styles.photo}
				alt='Photo'
			/>
			<div className={styles.info}>
				<h2 className={styles.name}>{props.profile.fullName}</h2>
				<ProfileStatusWithHooks
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
