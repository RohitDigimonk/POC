import React, { Component } from 'react';
import { Text, View, Alert, ScrollView, AsyncStorage, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Card from '../Card';
import Input from '../Input';
import CardSection from '../CardSection';
import Button from '../Button';
import axios from 'axios';


class UpdateProfile extends Component {


    
    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
      }

    state = { name: '', country: '', mobile: ''};
    
    userUpdate = () => {
        const {name} = this.state;
        const {country} = this.state;
        const {mobile} = this.state;
        
        console.log(JSON.stringify({

            

            name: name,

            country: country,
        
            contact: mobile,
        
            id: this.state.userid
         
         
          }))

          
        fetch('https://digimonk.net/poc/poc-api/api/update_profile', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    
    
    
    user_name: name,
  
    country: country,

    mobile_no: mobile,

    user_id: this.state.userid
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson)
       this.setState({
           data:responseJson
       })
// Showing response message coming from server after inserting records.
        Alert.alert(this.state.data['message']);
 
      }).catch((error) => {
        console.error(error);
      });
        
    }
    componentDidMount(){
        this.loadSession().done();
    console.log(JSON.stringify({
          
        user_id: this.props.navigation.state.params.id
     
      }))
        fetch('https://digimonk.net/poc/poc-api/api/get_user_data', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
          
              user_id: this.props.navigation.state.params.id
           
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
                 console.log(responseJson)
                 this.setState({
                     data:responseJson
                 })
                 this.setState({
                     newData: this.state.data['data']
                 })
                 this.setState({
                    name:this.state.newData['name'],
                     country:this.state.newData['country'],
                     mobile:this.state.newData['contact']
                 })
          // Showing response message coming from server after inserting records.
                //   Alert.alert(this.state.data['message']);
           
                }).catch((error) => {
                  console.error(error);
                });
              

    }

    
    
        
    
    
    render() {

    //  console.log(this.state.name, this.state.country, this.state.m)
       //console.warn(this.state.userid)
        
    return (

        
        
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
                          Update Profile
                        </Text>
                        </View>
                        </View>
                        </View>
        <View>
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Enter Your Name"
            placeholderTextColor='white'
            Value={this.state.name}
            onChangeText={name => this.setState({ name })}
            />
        </View>
        
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Select Country"
            placeholderTextColor='white'
            Value={this.state.country}
            onChangeText={country => this.setState({ country })}
            />
        </View>
        <View style={Styles.containerStyle}>
            <Input
            placeholder="Enter Mobile Number"
            placeholderTextColor='white'
            Value={this.state.mobile}
            onChangeText={mobile => this.setState({ mobile })}
            />
        </View>
        
        <View style={{marginTop:10}}>
            <Button onPress={this.userUpdate}>
                Update
            </Button>
        </View>
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
  }
}
export default UpdateProfile;