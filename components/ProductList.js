import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProductList() {

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
        <View>
            {products.map((item, index) => {
                return (
                <View style={{paddingTop: 5}} key={index}>
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
    )
}

const styles = StyleSheet.create({
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
        // height: '100%',
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
})