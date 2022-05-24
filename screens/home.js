import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Header from "../components/Header";

export default function Home() {
  const category = [
    	{
        title: 'Footwear',
        iconLink: 'https://img.icons8.com/stickers/100/000000/pair-of-sneakers.png'
      },
      {
        title: 'Beauty',
        iconLink: 'https://img.icons8.com/stickers/100/000000/lip-gloss.png'
      },
      {
        title: 'Apparel',
        iconLink: 'https://img.icons8.com/stickers/100/000000/formal-outfit.png'
      },
      {
        title: 'Tableware',
        iconLink: 'https://img.icons8.com/stickers/100/000000/tableware.png'
      },
      {
        title: 'Tools',
        iconLink: 'https://img.icons8.com/stickers/100/000000/full-tool-storage-box-.png'
      },
  ];
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

  return (
    <ScrollView style={styles.container}>
      {/* <Header title="Our E-commerce App" />       */}
      <View style={styles.categoryContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.categoryTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <ScrollView horizontal={true}>
          {category.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.iconContainer}>
                  <Image style={styles.categoryIcon} source={{uri: item.iconLink}}>
                  </Image>            
                </View>
                <Text style={styles.eachCategoryTitle}>{item.title}</Text>
              </TouchableOpacity>    
            )
          })} 
          </ScrollView>                   
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.categoryTitle}>Featured Products</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productRow}>
          {products.map((item, index) => {
            return (
              <View style={styles.eachProduct} key={index}>
                <Image style={styles.productImage} source={{uri: item.imageLink}}></Image>
                <Text style={styles.productTitle}>{item.title}</Text>
                <View style={styles.tagContainer}>
                  <ScrollView horizontal={true} >
                    {item.tag.map((tag, index) => {
                      return (                      
                        <Text key={index} style={styles.productTag}>{tag}</Text>                                        
                      )
                    })}
                  </ScrollView>                  
                </View>
                  <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.add}>
                      <Ionicons name="add" size={24} color="black" />
                    </TouchableOpacity>                    
                  </View>                

              </View>
            )
          })}         
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#FBEFEF',
        height: '100%',        
        // justifyContent: 'center',
        paddingTop: 10,
        // alignItems: 'center',        
    },
    categoryContainer: {
      width: '100%',
      padding: 10,
    },
    titleRow: {
      flexDirection: 'row',      
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      alignItems: 'flex-end',
    },
    categoryTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#222',
    },
    seeMore: {
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: '#FF9C9C',
      borderRadius: 5,
      padding: 5,
    },
    categoryRow: {
        flexDirection: 'row',
        overflow: 'scroll',
        // flexWrap: 'nowrap',
    },
    iconContainer: {
      padding: 5,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    categoryIcon: {
      height: 80,
      width: 80,
    },
    eachCategoryTitle: {
      textAlign: 'center',
    },
    productContainer: {
      padding: 10,
      // height: '80%',
      width: '100%',
      overflow: 'scroll',
    },
    productRow: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    eachProduct: {
      padding: 8,
      margin: 5,
      width: 160,      
      // height: 200,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    productImage: {
      height: 180,
      width: '100%',
      borderRadius: 10,
    },
    productTitle: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: '500',
      color: '#222',
      // fontFamily: 'ubuntu-bold',
    },
    tagContainer: {
      marginTop: 5,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      // overflow: 'scroll',
      // boxSizing: 'content-box',
    },
    productTag: {
      // whiteSpace: 'nowrap',
      paddingLeft: 5,
      paddingRight: 5,
      color: '#555',
      backgroundColor: '#eee',
      marginEnd: 5,
      borderRadius: 4,      
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    price: {
      // marginTop: 5,
      fontSize: 25,
      fontWeight: 'bold',
      color: '#333',      
    },
    add: {
      padding: 5,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#ddd',
    },
});