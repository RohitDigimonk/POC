import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, Value, onChangeText, keyboardType, placeholder, secureTextEntry, placeholderTextColor, }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.inputStyle}
                value={Value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
                

            
            />
        </View>
        
    );
};

const styles = {
    inputStyle: {
        color: 'white',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 15,
        //flex: 2,
        width: '70%',
        
     
    },
    labelStyle: {
        fontSize: 18,
        //flex: 1
        marginLeft: 10,
        marginRight: 30
    },
    containerStyle: {
        height: 40,
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width:'90%',
        // borderBottomWidth: 1
        
        
    }
};

export default Input;