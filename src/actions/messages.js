import { SEND_MESSAGE, ADD_MESSAGE } from '../consts';
import io from 'socket.io-client';

const socket = io('http://localhost:7777');

export const addMessage = message => ({
	type: ADD_MESSAGE,
	message
})
