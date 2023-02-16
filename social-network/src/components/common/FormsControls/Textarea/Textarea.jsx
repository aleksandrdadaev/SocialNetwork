import React from 'react';
import styles from './Textarea.module.css';

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.blok}>
			<textarea
				{...props}
				{...input}
				className={`${props.className} ${hasError ? styles.textareaError : ''}`}
			/>
			{hasError && <span className={styles.error}>{meta.error}</span>}
		</div>
	);
};

export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.blok}>
			<input
				{...props}
				{...input}
				className={`${props.className} ${hasError ? styles.textareaError : ''}`}
			/>
			{hasError && <span className={styles.error}>{meta.error}</span>}
		</div>
	);
};
