import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
	return (
		<section className={styles.profile}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</section>
	);
};

export default Profile;
