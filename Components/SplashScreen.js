import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, ImageBackground,Image,AsyncStorage,ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
 
 
componentDidMount () {
    setTimeout(() => {
    //  this._retrieveData();
     this.props.navigation.replace("navigationDrawerButton");
    
    }, 2000)
  }
 
//This method is used for session management after login you can set isLoggedIn= "true" in AsyncStorage
 /* _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('isLoggedIn');
        const email = await AsyncStorage.getItem('email');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      if(value == "true"){
         this.props.navigation.navigate("home",{email : email});
       }else{
         this.props.navigation.navigate("register");
       }
    }else{
      this.props.navigation.navigate("register");
    }
   } catch (error) {
     // Error retrieving data
   }
}
 
*/
 
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
  source={require('../image/ic_splash.jpg')}
      imageStyle={{resizeMode: 'stretch'}}
  style={{width: '100%', height: '100%'}}>
 
 
      <View  style={{ flex: 1, justifyContent: 'center',
    alignItems: 'center', }} >
 
 
     <Text style={{ height: 50,color:"#1562b0", fontSize: 20, fontWeight: 'bold',}}>Add Logo here</Text>
      <ActivityIndicator size="large" color="#1562b0" />
 
          </View>
 
 
      </ImageBackground>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   headerStyle: {
    width: 150,
    height: 150,
  },
});