import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
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
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = e => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<p className={styles.status} onDoubleClick={this.activateEditMode}>
						{this.props.status || '---'}
					</p>
				) : (
					<input
						type='text'
						value={this.state.status}
						className={styles.input}
						autoFocus={true}
						onBlur={this.deactivateEditMode}
						onChange={this.onStatusChange}
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
