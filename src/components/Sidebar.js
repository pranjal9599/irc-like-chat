import React from 'react';
import { connect } from 'react-redux';
import { changeChannel } from '../actions/nav';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.changeChannel = this.changeChannel.bind(this);
	}
	changeChannel(e) {
		let channel = e.target.value;
		console.log(channel);
		this.props.history.push('/' + channel);
		this.props.changeChannel(channel);
	}
	render() {
		return (
			<div className="sidebar">
				<h1>Channels</h1>
				<button value="welcome" className={this.props.channel === 'welcome' ? "nav-active": ''} onClick={this.changeChannel}>Welcome</button>
				<button value="programming" className={this.props.channel === 'programming' ? "nav-active": ''} onClick={this.changeChannel}>Programming</button>
				<button value="design" className={this.props.channel === 'design' ? "nav-active": ''} onClick={this.changeChannel}>Design</button>
				<button value="random" className={this.props.channel === 'random' ? "nav-active": ''} onClick={this.changeChannel}>Random</button>
				<button value="NSFW" className={this.props.channel === 'NSFW' ? "nav-active": ''} onClick={this.changeChannel}>NSFW</button>
				<button value="anime" className={this.props.channel === 'anime' ? "nav-active": ''} onClick={this.changeChannel}>Anime</button>
				<button value="youtube" className={this.props.channel === 'youtube' ? "nav-active": ''} onClick={this.changeChannel}>Youtube</button>
				<button value="gaming" className={this.props.channel === 'gaming' ? "nav-active": ''} onClick={this.changeChannel}>Gaming</button>
				<button value="linux" className={this.props.channel === 'linux' ? "nav-active": ''} onClick={this.changeChannel}>Linux</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		channel: state.nav
	}
}

export default connect(mapStateToProps, {changeChannel})(Sidebar);