import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Radium, {Style} from 'radium';
import { Link } from 'react-router';
import {globalStyles} from 'utils/styleConstants';
import Autocomplete from 'containers/Autocomplete/Autocomplete';
import {offlineOn, offlineOff} from './actions';
const HoverLink = Radium(Link);
let styles = {};

const Home = React.createClass({
  propTypes: {
    offlineMode: PropTypes.bool,
    dispatch: PropTypes.func
  },

  renderLandingSearchResults: function(results) {
    return (
      <div style={styles.results}>
        {

          results.map((item, index)=>{
            const url = item.slug ? '/pub/' + item.slug : '/user/' + item.username;
            const type = item.slug ? 'pub' : 'user';
            console.log("type", type);
            return (<div key={'landingSearchResult-' + index} style={styles.result}>
              <HoverLink key={'landingSearchResultLink-' + index} style={styles.resultLink} to={url}>
                <div style={styles.type}>{type}</div>
                <div style={[styles.imageWrapper, styles[type].imageWrapper]}>
                  <img style={styles.image} src={item.thumbnail} />
                </div>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.name}>{item.title}</div>
              </HoverLink>

            </div>);
          })
        }

        {results.length === 0
          ? <div style={styles.noResults}>No Results</div>
          : null
        }
      </div>
    );
  },

  toggleOfflineMode: function() {
    if (this.props.offlineMode) {
      console.log("dispatch off");
      this.props.dispatch(offlineOff);
    } else {
      console.log("dispatch on");
      this.props.dispatch(offlineOn);
    }
  },

  render: function() {
    return (
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.topPub}>PubPub</h1>
          <div style={styles.subheader}>DESKTOP</div>
        <button key="ShowMeScience" style={styles.button}><Link to={'/pubreader'} style={styles.buttonText}>Show Me Science</Link></button>
        <button key="OfflineMode" style={styles.button} onClick={this.toggleOfflineMode}>Offline Mode</button>
        </div>
        
        <div style={styles.search}>
          <Autocomplete
                  autocompleteKey={'landingSearch'}
                  route={'autocompletePubsAndUsers'}
                  placeholder="Search Pubs and People"
                  height={40}
                  showBottomLine={false}
                  hideResultsOnClickOut={false}
                  resultRenderFunction={this.renderLandingSearchResults}
                  loaderOffset={-20}
                  padding={'10px 0px'} />
        </div>

        <div style={styles.bottomContainer}>
          <p>Read, Write, Publish, Review.</p>
          <p>PubPub is a platform for totally transparent publishing.</p>
        </div>
      </div>
    );
  }
});

export default connect( state => {
  return {offlineMode: state.home.offlineMode};
})( Radium(Home) );


styles = {
  container: {
    height: '500px',
    width: '100%',
    margin: '0px',
    fontFamily: globalStyles.headerFont,
  },
  top: {
    backgroundColor: globalStyles.headerText,
    overflow: 'hidden',
    height: '550px'
  },
  topPub: {
    fontWeight: 900,
    fontFamily: "Yrsa",
    textAlign: 'center',
    fontSize: '90px',
    margin: '30px 0px 0px 0px',
    color: globalStyles.headerBackground,

  },
  subheader: {
    color: globalStyles.headerBackground,
    fontFamily: "ClearSans",
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 100
  },
  button: {
    display: 'block',
    width: 250,
    height: 80,
    lineHeight: '80px',
    textAlign: 'center',
    fontSize: '18px',
    borderColor: globalStyles.headerBackground,
    backgroundColor: globalStyles.headerText,
    cursor: 'pointer',
    margin: '30px auto',
    ':active': {
      position: 'relative',
      top: '1px',
    },
    ':hover': {
      color: globalStyles.headerBackground
    }
  },
  buttonText: {
    textDecoration: 'none',
    color: globalStyles.headerBackground,
    width: '100%',
    height: '100%',
    display: 'block',
    ':hover': {
      color: globalStyles.headerHover,
    },
  },
  search: {
    width: 'calc(100% - 60px)',
    padding: '10px 30px',
    backgroundColor: 'white',
    color: '#888',
  },
  searchInput: {
    borderColor: 'transparent',
    outline: 'none',
    fontSize: 30,
    width: '100%'
  },
  bottomContainer: {
    marginTop: '50px',
    fontSize: '20px',
    textAlign: 'center',
    fontFamily: globalStyles.headerFont,
    color: '#A8A8A8',
  },
  imageWrapper: {
    float: 'left',
    height: 40,
    margin: '0px 10px 0px 0px',
  },
  image: {
    height: '100%',
  },  
  type: {
    width: 40,
    float: 'left',
    fontSize: '15px',
    fontFamily: 'Courier',
    lineHeight: '40px',
    padding: '0px 25px 0px 0px',
    color: globalStyles.veryLight,
  },  
  pub: {
    imageWrapper: {
      display: 'none',
    },
  },
  user: {
  },
  name: {
    float: 'left',
    fontSize: '20px',
    lineHeight: '40px',
    padding: '0px 10px 0px 0px',
  }, 
  resultLink: {
    display: 'inline-block',
    height: '100%',
    color: globalStyles.sideText,
    // color: '#F4F4F4',
    ':hover': {
      color: globalStyles.sideHover,
      // color: '#CCC'
    },
  },
  results: {
    // backgroundColor: 'rgba(255,90,80,0.3)',
    margin: '9px 0px',
  },
  result: {
    padding: '10px 0px',
    // backgroundColor: 'rgba(100,200,49,0.5)',
    height: 40,
    borderTop: '1px solid #DDD',
  }
};

