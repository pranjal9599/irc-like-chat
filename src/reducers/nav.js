import { CHANGE_CHANNEL } from '../consts';
export default function app (state={} , action='') {
	switch (action.type) {
		case CHANGE_CHANNEL:
			return action.channel;
		default: 
			return state;
	}
}