import React, {PropTypes} from 'react';
import Radium from 'radium';
import {Reference} from './../../Reference/Reference';


let styles = {};

const baseMediaPlugin = React.createClass({
	propTypes: {
		children: PropTypes.any,
		size: React.PropTypes.oneOfType([React.PropTypes.oneOf(['small', 'medium', 'large']), React.PropTypes.number]),
		align: React.PropTypes.oneOf(['left', 'right', 'full']),
		caption: PropTypes.string,
		style: PropTypes.object,
		reference: PropTypes.object,
		className: PropTypes.string,
	},
	getInitialState: function() {
		return {};
	},
	generateClassName: function() {
		let className = 'pub-plugin ';
		className += (this.props.className) ? this.props.className : '';
		className += (this.props.align) ? ` pub-align-${this.props.align}` : '';
		if (this.props.size) {
			className += (isNaN(this.props.size)) ? ` pub-size-${this.props.size}` : ' pub-size-custom';
		}
		className += (this.props.caption) ? ' pub-caption' : '';
		return className;
	},
	render: function() {
		const size = this.props.size || 'large';
		const align = this.props.align || 'full';
		const caption = this.props.caption || '';
		const baseStyle = this.props.style || {};
		const reference = this.props.reference || null;

		// whether floating flows all of the text or just some is dependent on how much space is left
		// a 'large' image is smaller when floating because it needs to leave space for the text

		const styleObject = {
			display: 'block'
		};

		if (!isNaN(size)) {
			styleObject.width = size + '%';
			styleObject.height = size + '%';
		} else {
			const sizeOptions = {
				'small': (this.props.align === 'full') ? '30%' : '25%',
				'medium': (this.props.align === 'full') ? '50%' : '40%',
				'large': (this.props.align === 'full') ? '100%' : '60%'
			};
			styleObject.width = sizeOptions[size];
			styleObject.height = sizeOptions[size];
		}

		if (align === 'left' || align === 'right' ) {
			styleObject.float = align;
			if (align === 'left') {
				styleObject.margin = '1.5em 1.5em 1.5em 0px';
			} else {
				styleObject.margin = '0px 1.5em 1.5em 1.5em';
			}
		} else if (this.props.align === 'full') {
			styleObject.margin = '0px auto';
		}
		styleObject.whiteSpace = 'pre-wrap';

		const wrapperStyle = Object.assign(styleObject, baseStyle);

		return (<div className={this.generateClassName()} style={wrapperStyle}>
			{this.props.children}
			{ (caption) ? <span className="pub-sub-caption" style={styles.caption}>{caption}</span> : null }
			{ (reference) ? <div className="pub-sub-reference" style={styles.caption}> <Reference citationObject={reference} mode={'mla'} /> </div> : null }
		</div>
		);
	}
});

styles = {
	caption: {
		fontSize: '0.8em',
		color: '#757575',
		textAlign: 'left',
		whiteSpace: 'pre-wrap',
	},
};


export default Radium(baseMediaPlugin);
