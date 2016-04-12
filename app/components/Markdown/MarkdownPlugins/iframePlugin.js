import React, {PropTypes} from 'react';
import Media from './baseMediaPlugin';
import createPubPubPlugin from './PubPub';
import {Reference} from './../../Reference/Reference';


const InputFields = [
	{title: 'url', type: 'url', params: {}},
	{title: 'height', type: 'text', params: {placeholder: 'iFrame height'}},
	{title: 'width', type: 'text', params: {placeholder: 'iFrame width'}},
	{title: 'align', type: 'align'},
	{title: 'caption', type: 'text', params: {placeholder: 'iFrame caption'}},
	{title: 'reference', type: 'reference'},
];

const Config = {
	title: 'iframe',
	inline: true,
	autocomplete: true
};

const IFRAME_WRAPPER_CLASS = 'pub-iframe-wrapper';
const IFRAME_CLASS = 'pub-iframe';

const EditorWidget = (inputProps) => (<span>iFrame: {inputProps.url || 'Empty'}</span>);

let styles = {};

const Plugin = React.createClass({
	propTypes: {
		error: PropTypes.string,
		children: PropTypes.string,
		url: PropTypes.string,
		height: PropTypes.string,
		width: PropTypes.string,
		caption: PropTypes.string,
		align: React.PropTypes.oneOf(['left', 'right', 'full']),
		reference: PropTypes.object
	},
	getInitialState: function() {
		return {};
	},
	render: function() {
		const width = this.props.width;
		const height = this.props.height;
		const align = this.props.align;
		const url = this.props.url;
		const caption = this.props.caption;
		const reference = this.props.reference || null;

		let html;

		let style;

		if (align === 'full') {
			style = styles.full;
			style.width = width;
		} else {
			style = styles.inline;
			style.width = width;
		}


		if (this.props.error === 'empty') {
			html = <span></span>;
		} else {
			html = (<Media className={IFRAME_WRAPPER_CLASS} caption={caption} style={style} align={align}>
				<iframe className={IFRAME_CLASS} src={url} style={{width: '100%', height: height, margin: '0 auto', display: 'block'}} frameBorder="0"></iframe>
				{ (reference) ? <div style={styles.reference}> <Reference citationObject={reference} mode={'mla'} /> </div> : null }
			</Media>
		);
		}
		return html;
	}
});

styles = {
	full: {
		margin: '1em auto',
		textAlign: 'left'
	},
	inline: {
		margin: '1em 1em',
		textAlign: 'left'
	},
	reference: {
		fontSize: '0.65em',
		paddingTop: '0.5em'
	}
};

export default createPubPubPlugin(Plugin, Config, InputFields, EditorWidget);
