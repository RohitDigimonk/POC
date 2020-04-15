import React, { Component } from 'react';
import { Text, View, Alert, ScrollView, ImageBackground, Image } from 'react-native';
import Card from '../Card';
import Input from '../Input';
import CardSection from '../CardSection';
import Button from '../Button';
import { TouchableOpacity } from 'react-native-gesture-handler';


class SignUp extends Component {

    state = { name: '', email: '', country: '', mobile: '', password: '', Cpassword:""};
    
    userRegistration = () => {
        // console.log(this.userRegistration);
        const {name} = this.state;
        const {email} = this.state;
        const {country} = this.state;
        const {mobile} = this.state;
        const {password} = this.state;
        const {Cpassword} = this.state;

        if(name=="")
        {
            alert('Please Fill User Name');
        }
        else if(email=="") 
        {
            alert('Please Fill Email ID');
        }
        else if(country=="")
        {
            alert('Please Fill Country');
        }
        else if(password=="")
        {
            alert('Please Fill Password');
        }
        else if(password != Cpassword)
        {
            alert("Confirm Password not matched");
        }
        else 
        {
           
        fetch('https://digimonk.net/poc/poc-api/api/self_register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           
              name: name,
           
              email: email,
           
              country: country,
          
              mobile: mobile,
          
              password: password
           
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
                 console.log(responseJson)
                 this.setState({
                     data:responseJson
                 })
                //  const message = responseJson['message']
                //  const status = responseJson['status']
                //  console.log(status);
          // Showing response message coming from server after inserting records.
                //   alert(message);
                if(this.state.data['status']== 1){
                    alert(this.state.data['message'])
                    this.props.navigation.navigate('SignIn')
                }
                else{
                    alert(this.state.data['message'])
                }
           
                }).catch((error) => {
                  console.error(error);
                });   
        }
        
    }
    
    render() {
        
    return (

        
        
       
            <ImageBackground source={require('../image/screen3.png')} style={{width:"100%", height:"100%"}}>
                <ScrollView keyboardShouldPersistTaps='always'>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '60%'}}>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
            <Image
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/back.png')}
            >
                
            </Image>
            </TouchableOpacity>
            
            <Text style={{color: 'white', fontSize: 35, fontFamily: 'Roboto'}}>
                Hello!
            </Text>
            </View>
            <View style={{alignContent: 'center', alignItems: 'center', marginBottom: 5}}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Roboto'}}>
                Create an account to continue
            </Text>
            </View>
        
        
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Enter Your Name"
            placeholderTextColor='white'
            value={this.state.name}
            keyboardType="email-address"
            onChangeText={name => this.setState({ name })}
            />
            <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/Name.png')}
            />
        </View>
        <View style={Styles.containerStyle}>
        <Input
            placeholder="Enter Email ID"
            placeholderTextColor='white'
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            />
        <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/mail.png')}
            />
        </View>
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Select Country"
            placeholderTextColor='white'
            value={this.state.country}
            keyboardType="email-address"
            onChangeText={country => this.setState({ country })}
            />
        <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/country.png')}
            />
        </View>
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Enter Mobile Number"
            placeholderTextColor='white'
            value={this.state.mobile}
            keyboardType="number-pad"
            onChangeText={mobile => this.setState({ mobile })}
            />
        <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/mobile.png')}
            />
        </View>
        <View style={Styles.containerStyle}>
            <Input
            secureTextEntry
            placeholder="Enter Password"
            placeholderTextColor='white'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
        <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/password.png')}
            />
        </View>
        <View style={Styles.containerStyle}>
            <Input
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor='white'
            value={this.state.Cpassword}
            onChangeText={Cpassword => this.setState({ Cpassword })}
            />
        <Image 
            style={[{width: 30, height: 30,  marginRight:10, marginTop: 2}]}
            source={require('../image/password.png')}
            />
        </View>
        <View style={{marginTop:30}}>
            <Button onPress={this.userRegistration}>
                Sign Up Now !
            </Button>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{color: 'white', fontFamily: 'Robot'}}>Or</Text>
            <Text style={{color: 'white', fontFamily: 'Robot', fontSize: 18}}>Connect with</Text>
        </View>
        <View style={Styles.socialView}>
          <Image
          style={[{width: 150, height: 45, marginRight: 22}]}
          source={require('../image/facebook.png')}/>
          {/* <Image
          style={[{width: 50, height: 50, marginRight:26}]}
          source={require('../image/twitter.png')}/> */}
          <Image
          style={[{width: 150, height: 45, marginLeft: 50}]}
          source={require('../image/google+.png')}/>
      </View>
      </ScrollView>
    </ImageBackground>
      
    
        );
    }
}

const Styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        //backgroundColor: '#fff',
        flexDirection: 'row',
        //borderColor: '#ddd',
        position: 'relative',
        width: "80%",
        alignSelf: 'center',
        
        borderRadius: 25,
        borderWidth: 2,
        height:50,
        alignItems:"center",
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 12
        
    },
    socialView: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        paddingLeft: 10
    },
}
export default SignUp;