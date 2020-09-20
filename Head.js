import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignInAlt, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <>
      <View style={styles.header}></View>
      <Text style={styles.title}>It's a great day for coffee ☕</Text>
      <View style={styles.headertopnav}>

        <View style={styles.navleft}>
          <View style={styles.left}>
            <FontAwesomeIcon icon={faSignInAlt} size={25} color={""} />
            <Text style={styles.navitem}>Sign in</Text>
          </View>
          <View style={styles.left}>
            <FontAwesomeIcon icon={faEnvelope} size={25} color={""} />
            <Text style={styles.navitem}>Inbox</Text>
          </View>
        </View>

        <View style={styles.navright}>
          <View style={styles.right}>
            <FontAwesomeIcon icon={faCog} size={25} color={""} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#1A191A',
    marginTop: 10
  },
  headertopnav: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navitem: {
    fontSize: 16,
    paddingLeft: 11
  },
  navleft: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  navright: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  left: {
    flexDirection: 'row',
    padding: 11
  },
  right: {
    padding: 11
  }
});

export default Head;
