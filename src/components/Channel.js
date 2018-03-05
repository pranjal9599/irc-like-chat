import React from 'react';
import {
	Route
} from 'react-router-dom';
import Chat from './Chat';


const Channel = () => (
		<div className="chat-wrapper">
		<Route path="/:channel" component={Chat} />
		</div>
);



export default Channel;