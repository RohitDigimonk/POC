import React, { Component } from 'react';
import { ScrollView,View,Text, Alert, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import CaseDetail from './CaseDetail';
import Card from '../Card';
import CardSection from '../CardSection';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";


class CaseList extends Component {

url = "https://digimonk.net/poc/uploads/case_study_attach_file/"



loadSession = async() => {
  this.setState({
    userid:await AsyncStorage.getItem('userid')
  })
}




textRef2 = React.createRef();
textRef = React.createRef();
menuRef = null;
menuRef2= null;
setMenuRef2 = ref => {
  menuRef2 = ref;
};
// setMenuRef2 = ref => menuRef = ref;
setMenuRef = ref => menuRef = ref;
hideMenu = () => menuRef.hide();
sethideMenu = () => menuRef2.hide();
showMenu = () => menuRef.show(this.textRef.current, stickTo = Position.BOTTOM_LEFT);
showMenu2 = () => menuRef2.show(this.textRef2.current, stickTo = Position.BOTTOM_LEFT);

changePassword=()=>{
  this.sethideMenu()
  this.props.navigation.navigate('changePassword')
}

updateProfile=()=>{
  this.sethideMenu()
  this.props.navigation.navigate('UpdateProfile',{id:this.state.userid})
}

logout=async()=>{
  this.sethideMenu()
  var value = await AsyncStorage.removeItem('user')
  if(value==null){
    this.props.navigation.navigate('SignIn');
  }
}

// senddata = (userid,caseid) => {
//   this.props.navigation.navigate('CaseDesc', { cases })
// }

onHandleSort=(value)=>{
  this.hideMenu()
  
    console.log(this.state.value)
    fetch('https://digimonk.net/poc/poc-api/api/get_case_filterby_name', 
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          value: value
       
        })
         
      }).then((response) => response.json())
            .then((responseJson) => {
             console.log(responseJson)
             this.setState({
                 data:responseJson
             })

             console.log(this.state.data)
             this.setState({
                 newdata:this.state.data['data']
             })
            //  var count= Object.keys(this.state.newdata).length;
            //  console.log(count);
            //  //for(let i=0; i<count; ++i){
                 var newarr=this.state.newdata
             
             this.setState({
                 cases: newarr
             })
             
            }).catch((error) => {
              console.error(error);
            });
  
    // console.warn(value);

}
    

    static navigationOptions = ({ navigation }) => {
        return {
          
          headerLeft: (
          <View style={{left:10}}>
            <TouchableOpacity onPress={this.showMenu2}>
            <Image
              ref={this.textRef}
              style={[{width: 25, height: 25,}]}
              source={require('../image/more.png')}>       
             </Image>
             </TouchableOpacity>
          </View>
          ),
          headerRight: (
            <View style={{right:10}}>
            <TouchableOpacity onPress={this.showMenu}>
            <Image
              ref={this.textRef}
              style={[{width: 25, height: 25,}]}
              source={require('../image/filter.png')}
              // style={{ fontSize: 20, textAlign: "center" }}
             >       
             </Image>
             </TouchableOpacity>
          </View>
          ),
        };
      };

    state = { cases: [] };
 
    componentDidMount () {
        // axios.get('http://digimonk.net/poc/poc-api/api/get_case_study_data').
        // then(response => this.setState({ cases: response.data}));; 
        //console.log(response);
      //  console.log('hey');
      this.loadSession().done();
     
        // this.checkId()
        console.log(JSON.stringify({
   
          user_id: this.props.navigation.state.params.id
          
       
        }))
         fetch('https://digimonk.net/poc/poc-api/api/get_case_study_data', 
         {
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
     
                  console.log(this.state.data)
                  this.setState({
                      newdata:this.state.data['data']
                  })
                 //  var count= Object.keys(this.state.newdata).length;
                 //  console.log(count);
                 //  //for(let i=0; i<count; ++i){
                      var cases=this.state.newdata
                      console.log(cases)
                  
                  this.setState({
                      cases:cases
                  })
                  
                 }).catch((error) => {
                   console.error(error);
                 });
       
    }

    // checkId=()=>{
    //   Alert.alert(this.state.userid)
    // }
    rendercases() {
       return 
    }

    onPress=(cases , casesid , readstatus)=>{

      if(readstatus==0){
        

      fetch('https://digimonk.net/poc/poc-api/api/read_case_list', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          user_id: this.props.navigation.state.params.id,
       
          case_id: casesid
       
        })
       
      })
      }
      // Alert.alert(casesid)
      // console.log(cases)
      
      this.props.navigation.navigate('CaseDesc', { cases })
      
    }

    render() {
      console.log(this.state.cases)

      const url = this.url
        //const userid= this.props.navigation.state.params.userid
        console.log(this.state.userid);
        // const value = this.cases['finalstatus']
        // console.log(value)
    return (

    <View>
      <View style={{zIndex:1000, position:"absolute",top:-40, right:10, alignItems: "center", backgroundColor: "white"}}>
      <TouchableOpacity onPress={this.showMenu}>
      <Image
        ref={this.textRef}
        style={[{width: 25, height: 25,}]}
        source={require('../image/filter.png')}
        // style={{ fontSize: 20, textAlign: "center" }}
       >       
       </Image>
       </TouchableOpacity>
       <Menu
        ref={this.setMenuRef}
        // style={{left:0}}
      >
        <MenuItem onPress={this.hideMenu}>Sort By</MenuItem>
        <MenuItem onPress={()=>this.onHandleSort("case_no")}>Name</MenuItem>
        {/* <MenuDivider /> */}
        <MenuItem onPress={()=>this.onHandleSort("id")}>Date</MenuItem>
        <MenuItem onPress={()=>this.onHandleSort("status")}>Status</MenuItem>
      </Menu>
    </View>

    <View style={{ zIndex:1000, position:"absolute",top:-40, left:10, alignItems: "center", backgroundColor: "white"}}>
      <TouchableOpacity onPress={this.showMenu2}>
      <Image
        ref={this.textRef2}
        style={[{width: 25, height: 25,}]}
        source={require('../image/more.png')}
        // style={{ fontSize: 20, textAlign: "center" }}
       >       
       </Image>
       </TouchableOpacity>
       <Menu
        ref={this.setMenuRef2}
        // style={{left:0}}
      >
        <MenuItem onPress={this.logout}>Logout</MenuItem>
        <MenuItem onPress={this.updateProfile}>Profile</MenuItem>
        <MenuItem onPress={this.changePassword}>Change Password</MenuItem>
       
        
      </Menu>
    </View>

        <ScrollView>
          {
                this.state.cases.map( cases =>
                  // <TouchableOpacity onPress={this.senddata}>
                    <TouchableOpacity onPress={()=>this.onPress(cases, cases.id, cases.finalstatus)}>
                      <Card>
         
         <CardSection>
                    {/* <CaseDetail key={cases.id} record={cases} /> */}
                  <View style={{width:"100%",  backgroundColor: cases.finalstatus==0?'lightgrey':'white', flexDirection:'row'}}>
                  <View>
                    <Image
                      style={{ height:70, width:50, margin:5}}
                      source={{uri:  this.url+cases.attach_file}}
                    />
                  </View>
                  <View style={[styles.headerContentStyle]} key={cases.id}>
                    <Text style={[styles.headerTextStyle, fontWeight= cases.finalstatus==0?'bold':'normal']}>{cases.case_no}</Text>
                    <Text style={{fontWeight: cases.finalstatus==0?'bold':'normal'}}>{cases.case_study_title}</Text>
                    <Text style={{fontWeight: cases.finalstatus==0?'bold':'normal'}}>{cases.date}</Text>
                    {/* <Text>{cases.finalstatus}</Text>
                    <Text>{cases.status}</Text> */}
                    </View>
                  </View>
                    </CardSection>
                    </Card>
                    </TouchableOpacity>

                  
                    
                    )
          }
      </ScrollView>
      </View>
        
    );
}
}

const styles = {
  headerContentStyle: {
     flexDirection: 'column',
     justifyContent: 'space-around',
     paddingLeft: 5,
     
     
    //  backgroundColor:"#00f"
  },
  headerTextStyle: {
     fontSize: 18,
     color: '#24C4E2'
     
  },

  thumbnailStyle: {
      height: 50,
      width: 50,
  },

  thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
     marginRight: 10
     },
 imageStyle: {
     height: 300,
     flex: 1,
     width: null
 }
 
};
export default CaseList;