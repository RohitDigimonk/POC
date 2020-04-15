import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#02a8ee',
        borderRadius: 25,
        borderWidth: 1,
        height:50,
        alignItems:"center",
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        
        
    }


};

export default Button;