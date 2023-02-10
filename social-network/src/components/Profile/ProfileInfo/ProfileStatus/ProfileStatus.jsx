import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	};
	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
	};
	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<p className={styles.status} onDoubleClick={this.activateEditMode}>
						{this.props.status}
					</p>
				) : (
					<input
						type='text'
						value={this.props.status}
						className={styles.input}
						autoFocus={true}
						onBlur={this.deactivateEditMode}
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
