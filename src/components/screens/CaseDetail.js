 import React from 'react';
 import { Text, View, Image, ScrollView } from 'react-native';
 import Card from '../Card';
 import CardSection from '../CardSection';

 const CaseDetail = (props) => {
    return (
        
        <Card>
         
            <CardSection>
                
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                     style={styles.thumbnailStyle}
                     source={require('../image/note.png')}
                     />
                </View>
                <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{props.record.case_no}</Text>
                <Text>{props.record.case_study_title}</Text>
                <Text>{props.record.date}</Text>
                </View>
                 
            </CardSection>
           
                               
        </Card>
       
    );
 };

 const styles = {
     headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
     },
     headerTextStyle: {
        fontSize: 18
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

 export default CaseDetail;