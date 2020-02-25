import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Dimensions,
} from 'react-native';
import NewSongForm from './NewSongForm.js';
import uuid from 'uuid/v1';

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const SongsList = () => {
    const [songs, setSongs] = useState([{ title: "This wild darkness", id: 1 },
    { title: "almost Home", id: 2 }, { title: "memory gospel", id: 3 }])

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.songsList}>Songs List:</Text>
                <FlatList
                    data={songs}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.form}>
                <NewSongForm addSong={addSong} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - 280,
        marginTop: 80,
        width: Dimensions.get('window').width - 40,
    },
    list: {
        flex: 1,
    },
    form: {
        height: 200,
        backgroundColor: 'red'
    },
    item: {
        height: 60,
        backgroundColor: 'green',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    songsList: {
        fontSize: 20,
        textAlign: 'center',
        color: 'red'
    }
});

export default SongsList;