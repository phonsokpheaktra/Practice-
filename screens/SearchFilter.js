import { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, Keyboard, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ProductList from "../components/ProductList";

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [suggestResultVisible, setSuggestResultVisible] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

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

    const history = ['Suncreen', 'Shampoo', 'Shoes', 'iPhone 13 Mini'];

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
      setSearchHistory(history);      
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
            style={styles.suggestItem}
            onPress={() => getItem(item)}>
            {/* {item.id}
            {'.'} */}
            {item.title.toUpperCase()}
        </Text>
        );
      };

    const HistoryView = ({item}) => {
      return (
        // Flat List Item
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text
            style={styles.suggestItem}
            onPress={() => getItem(item)}>            
            {item}
          </Text>
          <Ionicons 
            name="close-outline" 
            size={24} 
            color="black" 
            onPress={() => {
              setSearchHistory(searchHistory.filter(function(f) { return f !== item }));
            }}
          />
        </View>          
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
        <SafeAreaView style={{flex: 1, backgroundColor: '#FBEFEF'}}>
          <ScrollView nestedScrollEnabled>
          <View style={styles.container}>            
            <View style={{width: '100%', alignItems: 'center'}}>
              <TextInput
                selectTextOnFocus
                style={styles.searchBar}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search for item..."
                onFocus={() => setSuggestResultVisible(true)}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); 
                  setSuggestResultVisible(false);
                  if (!searchHistory.includes(search) && search !== '') {
                    setSearchHistory([search, ...searchHistory.slice(0, searchHistory.length - 1)]);
                  }
                }}
              />
            </View>            
            {/* { suggestResultVisible &&                
                <FlatList
                    // style={{flex: 1}}
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />                
            } */}
            {/* { !suggestResultVisible && */}
              <View>
                { searchHistory.length > 0 &&
                  <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Text style={styles.title}>Recent Search</Text>
                      <Text style={styles.clearAll} onPress={() => setSearchHistory([])}>Clear All</Text>
                    </View>
                    <FlatList
                        style={{marginBottom: 10}}
                        data={searchHistory}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={HistoryView}
                    />
                  </View>                  
                }
                
                <Text style={styles.title}>Popular search</Text>
                <View style={styles.popularContainer}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {searchHistory.map((item, index) => {return (
                      <Text key={index} style={styles.popularItem}>{item}</Text>
                    )})}   
                  </ScrollView>
                </View>        
                <Text style={styles.title}>Suggestion for you</Text>                
                <ProductList products={products}/>
              </View>  
            {/* }                                               */}
          </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#FBEFEF',      
      paddingTop: 5,
      padding: 20,
      width: '100%',      
    },
    searchBar: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 15,
      margin: 5,
      marginBottom: 10,
      borderColor: '#ddd',
      backgroundColor: '#FFFFFF',
    },
    suggestItem: {
      margin: 5,      
    },
    title:{
      fontSize: 16,
      fontWeight: '600',
      color: '#555',      
    },
    clearAll: {
      color: '#fff',
      fontWeight: '500',
      backgroundColor: '#FF9C9C',
      borderRadius: 5,
      padding: 5,
    },
    popularContainer: {
      marginTop: 5,
      marginBottom: 10,
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
});

// https://aboutreact.com/react-native-search-bar-filter-on-listview/#Search-Bar-Filter-for-List-View