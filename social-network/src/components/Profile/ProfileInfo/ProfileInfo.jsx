import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			<img src={props.profile.photos.large} />
			<img src={props.profile.photos.small} />
			<span>Cover</span>
			<span>Photo</span>
			<span>Information</span>
		</div>
	);
};

export default ProfileInfo;
