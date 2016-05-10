import React, { Component } from 'react';
import { Link } from 'react-router';
import {globalStyles} from 'utils/styleConstants';

let styles = {};

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.topPub}>PubPub</h1>
          <div style={styles.subheader}>Desktop</div>
        <button style={styles.button}><Link to={'/pubreader'} style={styles.buttonText}>Show Me Science</Link></button>
        <button style={styles.button}><Link to={'/pubreader'} style={styles.buttonText}>Offline Mode</Link></button>
        </div>
        
        <div style={styles.search}>
          <input placeholder="Search for Pubs" style={styles.searchInput} />
        </div>

        <div style={styles.bottomContainer}>
          <p>Read, Write, Publish, Review.</p>
          <p>PubPub is a platform for totally transparent publishing.</p>
        </div>
      </div>
    );
  }
}

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
    textAlign: 'center',
    fontSize: '90px',
    margin: '30px 0px 0px 0px',
    color: globalStyles.headerBackground,

  },
  subheader: {
    color: globalStyles.headerBackground,
    textAlign: 'center',
    fontSize: '32px',
    margin: 0,
    marginBottom: '100px'
  },
  button: {
    display: 'block',
    width: 250,
    height: 80,
    lineHeight: '80px',
    textAlign: 'center',
    fontSize: '22px',
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
  }
};

