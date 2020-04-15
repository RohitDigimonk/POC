import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, ImageBackground } from 'react-native';
import CardSection from '../CardSection';
import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import Modal from 'react-native-modal';
//import GoogleSignin from './GoogleSignin';

class SignIn extends Component {
    state = { email: '', password: '', visibleModalId: null };  

    
   
    
    resetpass = () => {
        const { reset }  = this.state ;
        this.setState({ visibleModal: null })
        console.log(JSON.stringify({
  
            email: reset,
        
        
          }))
        fetch('https://digimonk.net/poc/poc-api/api/forgate', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  
    email: reset,


  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        //Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });    
    }

    renderModalContent = () => (
        <View style={styles.content}>
          <TextInput 
          
          style={styles.contentTitle}
          placeholder='Enter Email'
          value={this.state.reset}
          onChangeText={reset => this.setState({ reset })}       
          >
          </TextInput>

          <Button
           onPress={this.resetpass}>Submit
            </Button>
        </View>
      );


    login = () => {
        console.log(JSON.stringify({
 
            email: this.state.email,
         
            password: this.state.password
         
          }))
        fetch('https://digimonk.net/poc/poc-api/api/user_login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: this.state.email,
 
    password: this.state.password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // console.log(responseJson);

        this.setState({
            data:responseJson
        })
        this.setState({
            newdata:this.state.data['data']
        })

        //const userid = this.state.newdata ['id'];
        //console.warn(userid);


        if(this.state.data['status']== 1){

            this.session()
        }
        else{
            alert(this.state.data['message'])
        }
        
    //     // If server response message same as Data Matched
    //    if(responseJson === 'Data Matched')
    //     {
 
    //         //Then open Profile activity and send user email to profile activity.
    //         this.props.navigation.navigate('Second', { Email: UserEmail });
 
    //     }
    //     else{
 
    //       Alert.alert(responseJson);
    //     }
 
      }).catch((error) => {
        console.error(error);
      });
    }
    
    session=()=>{
      AsyncStorage.setItem('userid',this.state.newdata['id'])
      this.props.navigation.navigate('Welcome', { Email: this.state.newdata['email']});
    }

    render() {
    return (
     
        
      <ImageBackground source={require('../image/screen3.png')} style={{width:"100%", height:"100%"}} >
        <View style={{height:"100%", width:"100%"}} >
      {/* <Image 
      style={[{width: "100%", height: "100%"}]}
      
      /> */}
          <ScrollView keyboardShouldPersistTaps='always'>
          <View style={styles.ScreenColor}>
      <View style={styles.imageView}>
      <Image
          style={[{width: 150, height: 150}]}
          source={require('../image/new_logo.png')}
        />
      </View>
      <View style={styles.containerStyle}>
      <View style={{width:"100%", borderBottomWidth:1, margin:10, flexDirection: "row", borderRadius:5}}>
           
              <Input
              placeholder="Enter Your Email"
              placeholderTextColor='white'
              // label="Email ID"
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              />
            <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/mail.png')}
            />
           </View>

          <View style={{width:"100%", borderBottomWidth:1, margin:10, flexDirection: "row", borderRadius:5, marginTop: 2}}>
          
          <Input
              // label="Password"
              secureTextEntry
              placeholder="Enter Your Password"
              placeholderTextColor='white'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              />
            <Image 
            style={[{width: 30, height: 30,  marginRight:10}]}
            source={require('../image/password.png')}
            />
          </View>
      </View>
      <View style={{flexDirection:'row', width:"100%", paddingLeft:20, paddingRight:20, justifyContent:"flex-end"}}>
      {/* <Text style={{color:"white"}}>
              Remember me
      </Text> */}
          <TouchableOpacity onPress={() => this.setState({ visibleModal: 'popup' })}>
              <Text style={{color:"white", fontFamily: "Roboto"}}>
              Forgot Password
              </Text>
          </TouchableOpacity>
      </View>
      <CardSection>
          <Button onPress={this.login}>
              Secure Login
          </Button>       
      </CardSection>
      <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text style={{color:"white" , fontSize: 17, fontFamily: "Roboto"}}>
              Don't have an account? 
      </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
      <Text style={{color:"white", marginLeft: 3, fontSize: 19, fontFamily: "Roboto"}}>
              Sign up now !
      </Text>
      </TouchableOpacity>
      </View>
      <Text>
          ______________________ OR _________________________
      </Text>

      <Text style={{color:"white"}}>
        Connect With
      </Text>
      
      {/* <CardSection>
          <Button onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
          </Button>
      </CardSection> */}

      <View style={styles.socialView}>
          <Image
          style={[{width: 150, height: 45, marginRight: 26}]}
          source={require('../image/facebook.png')}/>
          {/* <Image
          style={[{width: 50, height: 50, marginRight:26}]}
          source={require('../image/twitter.png')}/> */}
          <Image
          style={[{width: 150, height: 45, marginRight: 2}]}
          source={require('../image/google+.png')}/>
      </View>
      {/* <View>
        <GoogleSignin><Text>asdda</Text></GoogleSignin>
      </View> */}

      {/* <View style={styles.container}> */}
      
      {/* <Button
        onPress={() => this.setState({ visibleModal: 'fancy' })}
        title="Fancy"
      /> */}
      
      {/* <Modal isVisible={this.state.visibleModal === 'default'}>
        {this.renderModalContent()}
      </Modal> */}
      {/* </View> */}
      <Modal
        isVisible={this.state.visibleModal === 'popup'}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
           {this.renderModalContent()}
      </Modal>
              
      </View>       
          </ScrollView>

      </View>
      </ImageBackground>
        
    );
  }
  }
  const styles = {
      ScreenColor: {
         
          alignItems: 'center',
          justifyContent: 'center',
         
          width:"100%",
          height:"100%",
          
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          
      },
      containerStyle: {
       
      
        marginLeft: 5,
        marginRight: 5,
        marginTop: 70,
        paddingLeft:20,
        paddingRight:20
    },
      imageView: {
          position: 'relative',
          top:50,
          // borderWidth:1
      },
      socialView: {
          flexDirection: 'row',
          marginTop: 70,
          alignItems: 'center',
          paddingLeft: 10
      },
      container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      contentTitle: {
        fontSize: 18,
        marginBottom: 12,
        borderWidth: 1,
        lineHeight: 10,
        width: '70%'
        
      },
  }


export default SignIn;