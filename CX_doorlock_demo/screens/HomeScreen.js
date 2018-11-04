import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  Header,
} from 'react-native-elements';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    // alert('hi')
    this.state = {
      userinput : '',
      finishinput : false
    }
    // this.handleChange.bind(this)
  }
  static navigationOptions = {
    header: null,

  };

  handleChange(text){
    let a = ''

  // alert(this.state.userinput)
  // this.state.userinput? a = this.state.userinput: a = ''
  a = a+text
  this.setState({userinput:a})
  if (this.state.userinput.length==1){
    this.setState({finishinput :true})
  } 

  // alert(a)
  }

  render() {

  let middlestuff
  if (!this.state.finishinput){
    middlestuff = <TextInput
    // ref="second"
    // style={this.state.pos > 0 ? styles.textInputStyle : 
    // styles.textInputNormalStyle}
    keyboardType = "number-pad"
    maxLength={2}
    // value={this.state.secondVal}
    autoCorrect={false}
    // onKeyPress={(event) => {this.onChange(1, event.nativeEvent.key); }}
    style={styles.getStartedText}
    autoFocus={true}
    textAlign={'center'}
    onChangeText={(text) => this.handleChange(text)
    }
    />
  }else{
    middlestuff = <View style={{paddingTop: 40,}}>

      <Text style={{
// height: 400,
paddingTop: 60,
// position: 'absolute',
// flex: 2,
// height: 250,
fontSize: 70,
color: '#fff',
lineHeight: 24,
// textAlign: 'center',
textAlign: 'center',

// marginLeft: 55,
// marginRight: 'auto',
}}>
        Unlocked!
      </Text>
    </View>


  }
    return (
      <View style={styles.container}>
      <Header
  placement="left"
  backgroundColor= '#006465' 
  statusBarProps={{ 
    flex:1,
    backgroundColor: '#006465' }}
  // color={{color: '#006465' }}
  // leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Cathay Pacific', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#006465' ,
    justifyContent: 'space-around',
  }}
/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <View style={{flex: 1,textAlign: 'center'}}> */}
        {/* <TextInput
    // ref="second"
    // style={this.state.pos > 0 ? styles.textInputStyle : 
    // styles.textInputNormalStyle}
    keyboardType = "number-pad"
    maxLength={2}
    // value={this.state.secondVal}
    autoCorrect={false}
    // onKeyPress={(event) => {this.onChange(1, event.nativeEvent.key); }}
    style={styles.getStartedText}
    autoFocus={true}
    textAlign={'center'}
    ></TextInput> */}
    {middlestuff}
    
    
    {/* </View> */}
          {/* <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this texmatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006564',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {

    // position: 'absolute',
    flex: 2,
    // height: 250,
    fontSize: 70,
    color: '#fff',
    lineHeight: 24,
    // textAlign: 'center',
    textAlign: 'center',

    // marginLeft: 55,
    // marginRight: 'auto',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  inputview: {
    height: '40%' ,
  },
});
