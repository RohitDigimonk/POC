import React, {Component} from 'react';
import {Text, View, AsyncStorage, ImageBackground, TouchableOpacity, Image} from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Input from '../Input';
import Button from '../Button';

class changePassword extends Component {

    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
      }


    state = { opassword: '', password: '', Cpassword: '' };

    updatePassword = () => {
        const {opassword} = this.state;
        const {password} = this.state;
        const {Cpassword} = this.state;
        // Alert.alert("djhbcshdsgj")

        if(opassword=="")
        {
            alert('Fill Old Password');
        }
        else if(password=="") 
        {
            alert('Fill New Password');
        }
        else if(password != Cpassword)
        {
            alert("Confirm Password not matched");
        }
        else 
        {
            alert(this.state.data['message']);
            
        }

        // console.log(JSON.stringify({
           
        //     oldpassword: opassword,
         
        //     newpassword: password,
        //     id: this.state.userid
        // })
        // );
        fetch('https://digimonk.net/poc/poc-api/api/change_password', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           
              user_id: this.state.userid,
           
              old_password: opassword,
           
              new_password: password,
          
                         
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
                 console.log(responseJson)
                 this.setState({
                     data:responseJson
                 })
          // Showing response message coming from server after inserting records.
                  //alert(this.state.data['message'])
           
                }).catch((error) => {
                  console.error(error);
                });
                                 
    }
        componentDidMount(){
        this.loadSession().done();
    }
    

    render() {
        
        // console.log(this.state.message)
        return(
            <ImageBackground source={require('../image/screen3.png')} style={{width:"100%", height: '100%'}}>
            <View>
        <View style={{position: 'relative', top: 0, height: 55, backgroundColor: '#02a8ee', width: '100%', flexDirection: 'row'}}>
                         <TouchableOpacity onPress={()=> this.props.navigation.navigate('CaseList')}>
                        <Image
                            style={[{width: 30, height: 30,  marginTop: 10, paddingTop:5}]}
                            source={require('../image/back.png')}
                        >
                
                        </Image>
                        </TouchableOpacity>
                        <View style={{width:'100%', alignItems:'center'}}>
                        <Text style={{textAlign: 'center', paddingTop: 10, color: '#ffffff', fontSize: 20, alignContent: 'center', marginRight:30}}>
                           Update Password
                        </Text>
                        </View>
                        </View>
                        </View>
                <View style={Styles.containerStyle}>
                <Input
                    placeholder="Old Password"
                    secureTextEntry
                    placeholderTextColor='white'
                    value={this.state.opassword}
                    onChangeText={opassword => this.setState({ opassword })}
            />
                </View>

                <View style={Styles.containerStyle}>
                <Input
                    placeholder="New Password"
                    secureTextEntry
                    placeholderTextColor='white'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
            />
                </View>

                <View style={Styles.containerStyle}>
                <Input
                    placeholder="Confirm Password"
                    secureTextEntry
                    placeholderTextColor='white'
                    value={this.state.Cpassword}
                    onChangeText={Cpassword => this.setState({ Cpassword })}
            />
                </View>
                    <View style={{marginTop:10}}>
                    <Button onPress={this.updatePassword}> 
                        Update Password
                    </Button>
                    </View>
            
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
}

export default changePassword;