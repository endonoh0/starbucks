import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignInAlt, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import { AppTabs } from '../comps/Tabs';
import Carousel from '../comps/carousel';
import { ScrollView } from 'react-native-gesture-handler';

const Head = ({ navigation }) => {

  return (
    <>
      <View style={styles.header}></View>
      <Text style={styles.title}>It's a great day for coffee ☕</Text>
      <View style={styles.headertopnav}>

        <View style={styles.navleft}>
          <View style={styles.left}>
            <FontAwesomeIcon
              icon={faSignInAlt}
              size={25} color={""}
              onPress={() => navigation.navigate('Login')}
              />
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

      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal: 20 }}>
            STARBUCKS REWARDS
          </Text>

          <View style={{height: 200, marginTop: 20}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Carousel
                imageUri={require('../assets/image.jpeg')}
                description="Scan in store or order ahead to earn Stars, then redeem for food, drinks and more"
              />
              <Carousel
                imageUri={require('../assets/image.jpeg')}
                description="Pay directly (even cash) or preload a Starbucks Card to get Rewards Faster"
              />
              <Carousel
                imageUri={require('../assets/image.jpeg')}
                description="Keep an eye out for games, offers, a treat on your birthday, and more!"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <Button
        title="Join Now"
        onPress={() => navigation.navigate('Signup')}
      />
      <AppTabs />
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
