import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const [age, setAge] = useState(20);
    const handleTextChange = (e) => {
        setTitle(e)
    }
    const increaseAge = () => {
        setAge(age + 1)
    }
    const handleAddSong = () => {
        if (title != '') {
            addSong(title);
            setTitle('')
        }
        else {
            Alert.alert("App", "Please enter your song title")
        }
    }
    useEffect(() => {
        console.log("Change of Title: ", title)
    }, [title]);
    useEffect(() => {
        console.log("Current Age: ", age)
    }, [age])
    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Song Title:</Label>
                        <Input onChangeText={(e) => handleTextChange(e)} value={title} />
                    </Item>
                </Form>
                <Button primary onPress={handleAddSong} style={styles.button}><Text> Add Song </Text></Button>
                <Text style={styles.text}>Your Age is : {age}</Text>
                <Button primary onPress={() => increaseAge()} style={styles.button}><Text> Increase Age by 1 </Text></Button>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'red',
        padding: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NewSongForm;