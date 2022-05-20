import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EditProfile() {
    const [ name, setName ] = useState('Masha Masha');
    const [ email, setEmail ] = useState('email@address.com');
    const [ phone, setPhone ] = useState('088123456');
    const [ gender, setGender ] = useState(null);    
    const [ dateOfBirth, setDateOfBirth ] = useState('Masha Masha');

    const [ open, setOpen ] = useState(false);
    const [items, setItems] = useState([
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]);

    return (
        <View style={styles.container}>
            <Image style={styles.profile} source={require('../assets/images/midoriya.jpg')}></Image>
            <View style={styles.subContainer}>                
                <View style={styles.row}>
                    <Text style={styles.editText}>Name</Text>
                    <TextInput 
                        style={styles.editInput} 
                        placeholder='Your Name...'
                        value={name} 
                        onChangeText={text => setName(text)}
                    >                        
                    </TextInput>                    
                </View>
                <View style={styles.row}>
                    <Text style={styles.editText}>Email</Text>
                    <TextInput 
                        style={styles.editInput} 
                        placeholder='Your Email Address...'
                        value={email} 
                        onChangeText={text => setEmail(text)}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                    >                        
                    </TextInput>                    
                </View>
                <View style={styles.row}>
                    <Text style={styles.editText}>Phone</Text>
                    <TextInput 
                        style={styles.editInput} 
                        placeholder='Your Phone Number...'
                        value={phone} 
                        onChangeText={text => setPhone(text)}
                        textContentType='telephoneNumber'
                        keyboardType='phone-pad'
                    >                        
                    </TextInput>                    
                </View>
                <View style={styles.row}>
                    <Text style={styles.editText}>Gender</Text>
                    <DropDownPicker
                        open={open}
                        value={gender}
                        items={items}
                        setOpen={setOpen}
                        setValue={setGender}
                        setItems={setItems}
                        // style={{borderWidth: 0,}}
                        containerStyle={{
                            width: '50%',
                            marginBottom: -6,
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEFEF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        // marginLeft: 10,    
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: -75,
        borderWidth: 5,
        borderColor: 'white',
    },
    subContainer: {
        width: '95%',
        height: '70%',
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 100,
        borderRadius: 10,
        shadowColor: '#999',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        zIndex: -1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        padding: 5,
        margin: 10,
    },
    editText: {
        fontSize: 20,
        color: 'gray',
    },
    editInput:{
        fontSize: 20,
        textAlign: 'right',
    },
});