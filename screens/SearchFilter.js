import { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, Keyboard, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [suggestResultVisible, setSuggestResultVisible] = useState(false);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //         setFilteredDataSource(responseJson);
    //         setMasterDataSource(responseJson);
    //         })
    //         .catch((error) => {
    //         console.error(error);
    //         });
    // }, []);

    const products = [
      {
        title: 'Nike Air Max',
        category: 'Footwear',
        tag: ['Nike', 'Air Max', 'Fashion', 'Shoes'],
        price: '$120',
        user: 'Nike Store',
        imageLink: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
      },
      {
        title: 'iPhone 13 Mini',
        category: 'Electronics',
        tag: ['Apple', 'iPhone', '13', 'Mini'],
        price: '$1360',
        user: 'Nike Store',
        imageLink: 'https://rewardmobile.co.uk/wp-content/uploads/2021/09/iPhone13_ProductImage_1000x1000_1.jpg',
      },
      {
        title: 'KOOMPI E13',
        category: 'Electronics',
        tag: ['KOOMPI', 'E13', 'Electronics'],
        price: '$270',
        user: 'Nike Store',
        imageLink: 'https://konfulononline.com/image/cache/catalog/KOOMPI/KOOMPI%20E13/E13-RoseGold3-800px-800x800.png',
      },
      {
        title: 'PlayStation 5',
        category: 'Electronics',
        tag: ['PlayStation', '5', 'Red Dragon'],
        price: '$505',
        user: 'Nike Store',
        imageLink: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Fsony-playstation-5-pro-release-rumors-info-000.jpg?w=960&cbr=1&q=90&fit=max',
      },
    ];

    useEffect(() => {
      setFilteredDataSource(products);
      setMasterDataSource(products);
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
          // setSuggestResultVisible(false);
        }
    };
    
    const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            // style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
        </Text>
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
        alert('Owner : ' + item.user + '\nTitle : ' + item.title);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <TextInput
                style={styles.searchBar}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                // underlineColorAndroid="transparent"
                placeholder="Search for item..."
                onFocus={() => setSuggestResultVisible(true)}
                onSubmitEditing={() => {Keyboard.dismiss(); setSuggestResultVisible(false)}}
              />
            </View>            
            { suggestResultVisible &&                
                <FlatList
                    // style={{flex: 1}}
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />                
            }
            <Text style={styles.title}>Popular search</Text>
            <View style={styles.popularContainer}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {products.map((item, index) => {return (
                  <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {item.tag.map((tag, index) => {
                        return (                      
                          <Text key={index} style={styles.popularItem}>{tag}</Text>                                        
                        )
                      })}
                    </ScrollView>
                  </View>                  
                )})}   
              </ScrollView>
            </View>        
            <Text style={styles.title}>Suggestion for you</Text>
            {products.map((item, index) => {
              return (
                <View style={{paddingTop: 5}}>
                  <TouchableOpacity style={styles.itemRow} onPress={() => getItem(item)}>
                    <Image style={styles.thumbnail} source={{uri: item.imageLink}}/>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemOwner}>
                        {item.user}
                      </Text>
                      <Text style={styles.itemTitle}>
                        {item.title.toUpperCase()}
                      </Text>
                      <Text style={styles.itemPrice}>
                        {item.price}
                      </Text>
                      <View style={styles.itemRow}>
                        <View style={styles.infoNumber}>
                          <Ionicons name="cart" size={20} color="#FF9C9C" style={{marginEnd: 3}}/>
                          <Text style={{fontSize:12}}>3.4K</Text>
                        </View>
                        <View style={styles.infoNumber}>
                          <Ionicons name="eye" size={20} color="#FF9C9C" style={{marginEnd: 3}}/>
                          <Text style={{fontSize:12}}>3.4K</Text>
                        </View>
                      </View>
                    </View>                       
                  </TouchableOpacity> 
                  <ItemSeparatorView/>
                </View>                            
              );
            })}            
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#FBEFEF',
      // height: '100%',        
      // justifyContent: 'center',\        
      paddingTop: 40,
      padding: 20,
      width: '100%',
      // alignItems: 'center',
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
    title:{
      fontSize: 16,
      fontWeight: '500',
      color: '#555',
      paddingTop: 10,
    },
    popularContainer: {
      marginTop: 5,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: '100%',      
    },
    popularItem: {      
      paddingLeft: 10,
      paddingRight: 10,
      padding: 5,
      color: '#555',
      backgroundColor: '#fff',
      marginEnd: 5,
      borderRadius: 15,
      borderWidth: 0.5,
      borderColor: '#999',
    },
    itemRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'flex-start',
    },
    thumbnail: {
      width: 80,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#FFF',
    },
    itemInfo: {
      height: '100%',
      paddingLeft: 10,
      justifyContent: 'space-between',
    },
    itemOwner: {
      fontSize: 10,
      color: '#999',
    },
    itemTitle: {
      fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: '700',
    },
    infoNumber: {
      flexDirection: 'row',      
      paddingLeft: 5,
      paddingRight: 5,
      // padding: 5,
      color: '#555',
      backgroundColor: '#fff',
      marginEnd: 5,
      borderRadius: 15,
      borderWidth: 0.5,
      borderColor: '#999',
      alignItems: 'center',
      marginTop: 8,
      marginBottom: 5,   
    },    
});

// https://aboutreact.com/react-native-search-bar-filter-on-listview/#Search-Bar-Filter-for-List-View