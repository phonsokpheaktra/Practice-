import { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, Keyboard, TouchableOpacity, Image } from "react-native";

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [suggestResultVisible, setSuggestResultVisible] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
            })
            .catch((error) => {
            console.error(error);
            });
    }, []);

    const products = [
      {
        title: 'Nike Air Max',
        category: 'Footwear',
        tag: ['Nike', 'Air Max', 'Fashion', 'Shoes'],
        price: '$120',
        imageLink: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
      },
      {
        title: 'iPhone 13 Mini',
        category: 'Electronics',
        tag: ['Apple', 'iPhone', '13', 'Mini'],
        price: '$1360',
        imageLink: 'https://rewardmobile.co.uk/wp-content/uploads/2021/09/iPhone13_ProductImage_1000x1000_1.jpg',
      },
      {
        title: 'KOOMPI E13',
        category: 'Electronics',
        tag: ['KOOMPI', 'E13', 'Electronics'],
        price: '$270',
        imageLink: 'https://konfulononline.com/image/cache/catalog/KOOMPI/KOOMPI%20E13/E13-RoseGold3-800px-800x800.png',
      },
      {
        title: 'PlayStation 5',
        category: 'Electronics',
        tag: ['PlayStation', '5', 'Red Dragon'],
        price: '$505',
        imageLink: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Fsony-playstation-5-pro-release-rumors-info-000.jpg?w=960&cbr=1&q=90&fit=max',
      },
    ];

    useEffect(() => {
      setFilteredDataSource(products);
      setMasterDataSource(products);
    });

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
          <TouchableOpacity style={styles.itemRow}>
            <Image style={styles.thumbnail} source={{uri: item.imageLink}}/>
            <Text
              style={styles.itemStyle}
              onPress={() => getItem(item)}>
              {item.id}
              {'. '}
              {item.title.toUpperCase()}
            </Text>
          </TouchableOpacity>          
        );
      };
     
    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
            style={{
                margin: 2,
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
    itemRow: {
      flexDirection: 'row',
      width: '90%',
      alignItems: 'flex-start',
    },
    thumbnail: {
      width: 80,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#FFF',
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