import React from 'react';

const Message = ({ yours, message='', user='' }) => (
	<div className={!!yours ? 'message user' : 'message'}>
		<p>{message}</p>
		<p></p>
		<span>10 sec ago.</span>
		<span>{user}</span>
	</div>
)

export default Message;