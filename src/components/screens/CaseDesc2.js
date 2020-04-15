import React, {Component} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, TextInput} from 'react-native';
import Button from '../Button';
import Modal from 'react-native-modal';





// import console = require('console');

//import console = require('console');
//import console = require('console');

// import console = require('console');
class CaseDesc2 extends Component {
    
    state = { visibleModalId: null }; 

    data= this.props.navigation.state.params.data

    attach_file = this.data['attach_file']
    attach = this.attach_file.split('*#*')
    url = "https://digimonk.net/poc/uploads/case_study_attach_file/"

    

    // closemodal = () => {
    //     // alert()
    //     this.setState({ visibleModal: null })
        
    //     }

    // renderModalContent = () => (
    //     <View style={Styles.content}>
         
    //       <View style={Styles.contentTitle}>
            
    //         {
    //             this.attach.map(data=>
    //                 <TouchableOpacity onPress={() => Linking.openURL(this.url+data) }>
    //                <Text>{data}</Text> 
    //                </TouchableOpacity>
    //                 )
    //         }
            
    //       </View>

    //       {/* <Button
    //        onPress={this.closemodal}>Close
    //         </Button> */}
    //     </View>
    //   );
   
    
    
    render () {
        console.log(this.attach)

        
        // const data= this.props.navigation.state.params.cases

        const data = this.data
        const description= this.data['description']
        const id = this.data['id']
        const case_no = this.data['case_no']
        const vital_keys = this.data['vital_keys']
        const vital = vital_keys.split(',');
        const vital_values = this.data['vital_values']
        const vital_val = vital_values.split(',');
        
        
        // console.log();
        



        // const vital_values = data['vital_values']
        //const [Vital] = vital_keys.split(',')

        //console.warn(Vital[1])
        // console.warn(this.state.data)
        //console.warn(this.props);
        //const { navigation } = this.props;
        //const userid = navigation.getParam(userid);
        //console.warn(this.props);
        //const description = this.props.navigation.getParam('description');
        // const case_study_title = this.props.navigation.getParam('case_study_title');
        // const description = this.props.navigation.getParam('description');
        // const vital_keys = this.props.navigation.getParam('vital_keys');
        
        
        return (
            <ScrollView>
                
                
                <View style={{position: 'relative', top: 0, height: 55, backgroundColor: '#02a8ee', width: '100%', flexDirection: 'row'}}>
                         <TouchableOpacity onPress={()=> this.props.navigation.navigate('CaseDesc')}>
                        <Image
                            style={[{width: 30, height: 30,  marginTop: 10, paddingTop:5}]}
                            source={require('../image/back.png')}
                        >
                
                        </Image>
                        </TouchableOpacity>
                       <View style={{width:"100%", alignItems:"center"}}>
                       <Text style={{textAlign: 'center', paddingTop: 10, color: '#ffffff', fontSize: 20, alignContent: 'center', marginRight:30}}>
                            {case_no}
                       </Text>
                       </View>
                   </View>
                <View style={Styles.headingstyle}>
                    <Text style={Styles.textStyle}>Description</Text>
                </View>
                <View style={Styles.containerStyle}>
                    <Text style={{textAlign: 'justify'}}>
                    {description}           
                    </Text>
                </View>
                <View style={Styles.headingstyle}>
                    <Text style={Styles.textStyle}>Vitals Are</Text>
                </View>
                <View>
                    <View style={{ flex:1, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                    <View style={{width:"50%"}}>
                    {vital.map(vital=> 
                          <View style={Styles.tableStyle}>              
                        <Text>{vital}</Text> 
                          </View>
                        )}
                    </View>
                    <View style={{width:"50%"}}>
                    {vital_val.map(vital_val=>
                        <View style={[Styles.tableStyle2]}>
                        <Text>{vital_val}</Text>
                        </View>
                    )}
                    </View>
                    
                    </View>
                </View>
                {/* <View style={Styles.tableStyle}>
                    <Text>{vital[0]}</Text>
                    <Text>{vital_val[0]}</Text>
                </View>
                <View style={Styles.tableStyle}>
                    <Text>{vital[1]}</Text>
                    <Text>{vital_val[1]}</Text>
                </View>
                <View style={Styles.tableStyle}>
                    <Text>{vital[2]}</Text>
                    <Text>{vital_val[2]}</Text>
                </View>
                <View style={Styles.tableStyle}>
                    <Text>{vital[3]}</Text>
                    <Text>{vital_val[3]}</Text>
                </View>
                <View style={Styles.tableStyle}>
                    <Text>{vital[4]}</Text>
                    <Text>{vital_val[4]}</Text>
                </View> */}
                {/* <View style={Styles.headingstyle}>
                <Text style={Styles.textStyle}>Question</Text>
                </View>
                <View style={Styles.containerStyle}>
                <Text style={{textAlign: 'justify'}}>{question}</Text>
                </View> */}
                
                    {/* <TouchableOpacity onPress={() =>Linking.openURL(url+attach_file) }> */}
                    {/* <TouchableOpacity onPress={()=>this.setState({ visibleModal: 'popup' })}>

                    <Text style={{fontSize: 23, textAlign: 'center', color: 'blue', textDecorationLine: "underline", marginBottom: 5 }}>
                        View Attachment <Image
                        style={{width: 20, height: 20}}
                        source={require('../image/attachment.png')}
                        />
                    </Text>
                    </TouchableOpacity> */}
                    
                <View style={{marginTop:10}}>
                <Button onPress={() => this.props.navigation.navigate('AnswerDetail', { data })}>
                    Qusetion & answer
                </Button>
                </View>
                {/* <Modal
        isVisible={this.state.visibleModal === 'popup'}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        onBackdropPress={onPress=()=> this.setState({ visibleModal: null })}
      >
           {this.renderModalContent()}
      </Modal> */}
            </ScrollView>
        );
    }
}

const Styles = {
    headingstyle: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        
        
    },
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        borderColor: 'black',
        position: 'relative',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 'auto'
     },
     textStyle: {
        fontSize: 23,
        backgroundColor: 'grey',
        color: 'white',
        paddingLeft: 5, 
        paddingRight: 5,
        fontFamily: 'Robot'
     },
     tableStyle: {
         borderLeftWidth: 1,
         borderTopWidth: 1,
         borderBottomWidth: 1,
         borderColor: 'black',
         paddingTop: 5,
         paddingLeft: 10,
         paddingRight: 10,
        //  marginLeft: 10,
        //  marginRight: 10,
         
        //  flex: 1,
        //  width: "40%",
        //  flexDirection: 'column',
        //  justifyContent: 'space-between',
         
    },
    tableStyle2: {
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        // marginLeft: 10,
        // marginRight: 10,
        // flex: 1,
        // width: "40%",
        flexDirection: 'row-reverse'
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
        // borderWidth: 1,
        lineHeight: 10,
        width: '70%'
        
      },
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 5,
      },
      columnStyle: {
          width: "50%"
      }
}



export default CaseDesc2;