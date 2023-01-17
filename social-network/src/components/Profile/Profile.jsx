import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
	return (
		<section>
			<span>Cover</span>
			<span>Photo</span>
			<span>Information</span>
			<MyPosts />
		</section>
	);
};

export default Profile;
