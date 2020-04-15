import React from 'react';
import { createStackNavigator, createAppContainer, Image, Button, ActionBarImage, Text} from 'react-navigation';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';
import CaseList from './src/components/screens/CaseList';
import CaseDesc from './src/components/screens/CaseDesc';
import AnswerDetail from './src/components/screens/AnswerDetail';
import UpdateProfile from './src/components/screens/UpdateProfile';
import changePassword from './src/components/screens/changePassword';
import Welcome from './src/components/screens/Welcome';
import CaseDesc2 from './src/components/screens/CaseDesc2';

const AppNavigator = createStackNavigator({
        
        SignIn: {
          
          screen: SignIn,
          navigationOptions: {
          header: null
        }
        },
        SignUp: {
          screen: SignUp,
          navigationOptions: {
          header: null,
          title: 'Registration',
          headerStyle:{
          backgroundColor: '#02a8ee'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            
                
            }
          }
        },
        CaseList: {
          screen: CaseList,
           navigationOptions: {
           header:null,
          //   title: 'Case Study',
          //   headerStyle:{
          //   backgroundColor: '#02a8ee'
          //     },
          //     headerTintColor: '#ffffff',
          //     headerTitleStyle: {
          //     flex: 1,
          //     textAlign: 'center',
              
             }
          // }
        },
        CaseDesc: {
          screen: CaseDesc,
          navigationOptions: {
            header: null,
          }
        },

        AnswerDetail: {
          screen: AnswerDetail,
          navigationOptions: {
            header: null
          }
        },
        UpdateProfile: {
          screen: UpdateProfile,
          navigationOptions: {
            header: null
          }
          
        },
        changePassword: {
          screen: changePassword,
          navigationOptions: {
            header: null
          }
        },
        Welcome: {
          screen: Welcome,
          navigationOptions: {
            header: null
          }
        },
       CaseDesc2: {
         screen: CaseDesc2,
         navigationOptions: {
           header: null
         }
       },
}, 
{
           initialRouteName: 'SignIn'
})


export default createAppContainer(AppNavigator);