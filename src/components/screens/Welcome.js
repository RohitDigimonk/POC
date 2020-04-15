import React, {Component} from 'react';
import { View, Image, ImageBackground ,AsyncStorage,} from 'react-native';
import Button from '../Button';



class Welcome extends Component{
    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
      }

      componentDidMount=()=>{
        this.loadSession().done();
      }
    render() {
    return (
        
      <ImageBackground source={require('../image/screen3.png')} style={{width:"100%", height:"100%"}} >
      <View style={styles.ScreenColor}>
      <View style={styles.imageView}>
      <Image
          style={[{width: 150, height: 150}]}
          source={require('../image/new_logo.png')}
        />
      </View>
        <View style={{marginBottom:1}}>
            <Button onPress={()=> this.props.navigation.navigate('CaseList',{id:this.state.userid})}>
                Welcome
            </Button>       
        </View>
        
        
        </View>
        </ImageBackground>      
  );
}
}
const styles = {
    ScreenColor: {
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    imageView: {
        position: 'absolute',
        top:50,
        // borderWidth:1
    }
}



export default Welcome;