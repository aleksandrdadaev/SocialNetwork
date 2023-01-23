import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = props => {
	return (
		<section className={s.profile}>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} addPost={props.addPost} />
		</section>
	);
};

export default Profile;
