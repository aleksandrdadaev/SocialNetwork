import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
	return (
		<section className={s.profile}>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</section>
	);
};

export default Profile;
