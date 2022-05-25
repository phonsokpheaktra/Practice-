import { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, Keyboard } from "react-native";

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [suggestResultVisible, setSuggestResultVisible] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
            })
            .catch((error) => {
            console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item.title
                  ? item.title.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
    };
    
    const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'. '}
            {item.title.toUpperCase()}
          </Text>
        );
      };
     
    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
            style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8',
            }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <TextInput
              style={styles.searchBar}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search for item..."
              onFocus={() => setSuggestResultVisible(true)}
              onSubmitEditing={() => {Keyboard.dismiss; setSuggestResultVisible(false)}}
            />
            { suggestResultVisible &&                
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />                
            }
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEFEF',
        height: '100%',        
        justifyContent: 'center',
        paddingTop: 40,
        alignItems: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    searchBar: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        margin: 5,
        borderColor: '#ddd',
        backgroundColor: '#FFFFFF',
    },
});

// https://aboutreact.com/react-native-search-bar-filter-on-listview/#Search-Bar-Filter-for-List-View