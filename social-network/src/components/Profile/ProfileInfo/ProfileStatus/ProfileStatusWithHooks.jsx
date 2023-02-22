import React, { useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = e => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode ? (
				<p className={styles.status} onDoubleClick={activateEditMode}>
					{props.status || '---'}
				</p>
			) : (
				<input
					type='text'
					value={status}
					className={styles.input}
					autoFocus={true}
					onBlur={deactivateEditMode}
					onChange={onStatusChange}
				/>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
