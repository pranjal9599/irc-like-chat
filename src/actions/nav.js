import { CHANGE_CHANNEL } from '../consts';
export const changeChannel = (channel) => ({
	type: CHANGE_CHANNEL,
	channel
});