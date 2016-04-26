import Radium from 'radium';
import ErrorMsg from './ErrorPlugin';
import React from 'react';

function attachWrapper(Component) {
	const PluginWrapper = React.createClass({
		render() {
			try {
				return (<Component {...this.props} {...this.state} />);
			} catch (err) {
				console.log(err);
				// return (<ErrorMsg>Error rendering {options.name} plugin</ErrorMsg>);
				return (<ErrorMsg>Error rendering plugin</ErrorMsg>);
			}
		}
	});
	return PluginWrapper;

}

export default function(reactComponent, config, inputFields, editorWidget) {
	return {
		Config: config,
		InputFields: inputFields,
		Component: attachWrapper(Radium(reactComponent)),
		Widget: editorWidget,
	};
}
