import React, {PropTypes} from 'react';
import Radium, {Style} from 'radium';
import {globalStyles} from 'utils/styleConstants';
import Markdown from './Markdown/Markdown';
import SelectionPopup from './SelectionPopup/SelectionPopup';
import Reference from './Reference/Reference';
import License from './License/License';
import ResizingText from 'utils/ResizingText';

import {globalMessages} from 'utils/globalMessages';
import {parsePluginString} from 'utils/parsePlugins';

import {FormattedMessage} from 'react-intl';

import samplePubData from 'sample_pub_data';


let styles = {};

const PubBody = React.createClass({
  propTypes: {
    header: PropTypes.string,
    pubs: Proptypes.array
  },
  getDefaultProps: function() {
    return {
    };
  },

  getInitialState() {
    return {
    };
  },

  componentDidMount() { 
  },

  componentWillReceiveProps(nextProps) {
    // if (this.props.styleScoped !== nextProps.styleScoped) {
    //  document.getElementById('dynamicStyle').innerHTML = nextProps.styleScoped;
    // }
    // if (!nextProps.styleScoped) {
    //  document.getElementById('dynamicStyle').innerHTML = '';
    // }
  },

  render: function() {
    const pubs = this.props.pubs || [];

    return (
      <div style={styles.container}>
        <div style={styles.headerPanel}>
          <div style={styles.headerText}>{this.props.header}</div>
          <div style={styles.headerRight}></div>
        </div>

        <div style={styles.content}>
          pubs.map((pub, index)=>{
            return (
              <div key={'pub-' + index} className={'pubList pub'}>
                <Link style={globalStyles.link} to={'/pub/' + pub.slug}>
                  <div className={'pubList title'}>{pub.title}</div>
                  <div className={'pubList authors'}>
                    {pub.authors.map((author, authorIndex)=>{
                      return <div className={'pubList author'} key={'pub-' + index + '-author-' + authorIndex}>{author.name}</div>;
                    })}
                  </div>
                  <div className={'pubList abstract'}>{pub.abstract}</div>
                  <div className={'pubList createDate'}>{dateFormat(pub.createDate, 'mmm dd, yyyy')}</div>
                  <div className={'pubList lastUpdated'}>{dateFormat(pub.lastUpdated, 'mmm dd, yyyy')}</div>
                  <div className={'pubList discussionCount'}>{pub.discussions.length}</div>

                </Link>

              </div>
            );
          });
        </div>
      </div>
    );
  }
});


styles = {
  

};

export default Radium(PubBody);
