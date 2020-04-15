import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={Styles.containerStyle}>
                {props.children}
        </View>
    );
};

const Styles = {
    containerStyle: {
        //borderBottomWidth: 1,
        padding: 5,
       // backgroundColor: '#fff',
        flexDirection: 'row',
        //borderColor: '#ddd',
        position: 'relative',
        
    }
};


export default CardSection;