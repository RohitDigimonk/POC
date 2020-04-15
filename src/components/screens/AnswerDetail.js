import React, {Component} from 'react';
import { Text, View, ScrollView, Image, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';




class AnswerDetail extends Component {
    constructor() {
        super()
        this.state = { expanded: false }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
        }
      
        changeLayout = () => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          this.setState({ expanded: !this.state.expanded });

        }
        
    render() {

         const data= this.props.navigation.state.params.data
         const question = data['put_up_your_question']
         const solution = data['case_study_solution']
         const keys_findings = data['keys_findings']
         const echo_finding = data['point_care_echo_findings']
         const echo = echo_finding.split(',');
        const newEcho= echo.map(item => 
          <Text style={Styles.text}>{item}</Text>
          );

        // con
             
            //console.log(echo)
         const discussion = data['discussion']
         const cause = data['cause']
         const treatement = data['treatement']
         const case_no = data['case_no']
        //console.log(echo)
        //var aecho = [echo];
        //console.log(aecho[0])
        
        return (
            <ScrollView>
              <View style={{position: 'relative', top: 0, height: 55, backgroundColor: '#02a8ee', width: '100%', flexDirection: 'row'}}>
                         <TouchableOpacity onPress={()=> this.props.navigation.navigate('CaseDesc2')}>
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
                <Text style={Styles.textStyle}>Question</Text>
                </View>
                <View style={Styles.containerStyle}>
                <Text style={{textAlign: 'justify'}}>{question}</Text>
                </View>
            <View style={Styles.headingstyle}>
                    <Text style={Styles.textStyle}>Answer</Text>
            </View>
            <View style={Styles.containerStyle}>
                    <Text style={{textAlign: 'justify'}}>
                    {solution}           
                    </Text>
            </View>
            
            <View style={Styles.container}>
            <View style={Styles.btnTextHolder}>

            <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={Styles.Btn}>
            <Text style={Styles.btnText}>Echo Findings</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
              { newEcho}
            </View>
            </View>
            </View>

            <View style={Styles.container}>
            <View style={Styles.btnTextHolder}>

            <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={Styles.Btn}>
            <Text style={Styles.btnText}>Discussion</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text style={Styles.text}>
              { discussion }
            </Text>
            </View>
            </View>
            </View>

            <View style={Styles.container}>
            <View style={Styles.btnTextHolder}>

            <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={Styles.Btn}>
            <Text style={Styles.btnText}>Causes</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text style={Styles.text}>
              { cause }
            </Text>
            </View>
            </View>
            </View>

            <View style={Styles.container}>
            <View style={Styles.btnTextHolder}>

            <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={Styles.Btn}>
            <Text style={Styles.btnText}>Treatement</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text style={Styles.text}>
              { treatement }
            </Text>
            </View>
            </View>
            </View>
        </ScrollView>
    );
}
}

const Styles = {
headingstyle: {
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1
},
container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
containerStyle: {
    //borderWidth: 1,
    padding: 5,
    //borderColor: 'black',
    position: 'relative',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 'auto',
    marginBottom: 10
 },
 textStyle: {
    fontSize: 23,
    ///backgroundColor: 'grey',
    color: 'Black',
    paddingLeft: 5, 
    paddingRight: 5,
    fontFamily: 'Robot',
    
    
 },
 CardStyle: {
     borderWidth: 2,
     borderColor: 'grey',
     marginTop: 5,
     marginLeft: 10,
     marginRight: 10,

    },
 CardDetail: {
     borderBottomWidth: 1,
     borderColor: 'grey',
     alignItems: 'center',
     height: 100

    },
btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
    },   
Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
    },
text: {
    fontSize: 17,
    color: 'black',
    padding: 10,
    textAlign: 'justify'
      },
}

export default AnswerDetail;
