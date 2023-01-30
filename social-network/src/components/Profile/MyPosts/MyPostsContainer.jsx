import { connect } from 'react-redux';
import {
	updateNewPostInputValueAC,
	addPostAC,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostInputValue: state.profilePage.newPostInputValue,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		updateNewPostInputValue: text => {
			let action = updateNewPostInputValueAC(text);
			dispatch(action);
		},
		addPost: () => {
			let action = addPostAC();
			dispatch(action);
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
