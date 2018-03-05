import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import io from 'socket.io-client';
import { addMessage } from '../actions/messages';
import { changeChannel } from '../actions/nav';

const socket = io('http://localhost:7777');

class Chat extends React.Component {
	constructor(props) {
		super(props);
		socket.on('message', function (message) {
			props.addMessage(message);
		});
		this.handleChange = this.handleChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.state = {
			msg: ''
		}
	}

	componentDidMount() {
		if(!this.props.channel && this.props.channel !== '') {
			this.props.changeChannel(this.props.match.params.channel);
		}
	}

	handleChange = e => 
		this.setState({...this.state, msg: e.target.value});

	sendMessage = (e) => {
		e.preventDefault();
		let username = window.localStorage.username || 'Anon';
		let time = new Date().getTime();
		let channel = this.props.match.params.channel;
		console.log(username, time)
		this.setState({msg: ''})
		let msg = {
			message: this.state.msg,
			username,
			time,
			channel
		}
		socket.emit('message', msg);
	}

	render() {
		return (
			<div>
			<h1>Hello {this.props.match.params.channel}</h1>
			<div style={{overflowY: 'scroll', flex: 1, height: '60vh'}}>
			{ !!this.props.messages.length>0 && 
				this.props.messages.map(
					(msg, i) => (
						msg.channel===this.props.match.params.channel &&
						<Message key={i} message={msg.message} user={msg.username} />
					)
				)
			}
			</div>

			<form action="#" onSubmit={this.sendMessage} style={{alignSelf: 'flex-end', flex: 1}}>
				<input onChange={this.handleChange} value={this.state.msg} placeholder="type your message" height="auto" />
				<input type="submit" hidden/>
			</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		messages: state.messages,
		channel: state.channel
	}
}

export default connect(mapStateToProps, { changeChannel, addMessage})(Chat);