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
        title: 'Apparel',
        iconLink: 'https://img.icons8.com/stickers/100/000000/formal-outfit.png'
      },
      {
        title: 'Apparel',
        iconLink: 'https://img.icons8.com/stickers/100/000000/formal-outfit.png'
      },
  ];
  const products = [
    {
      title: 'Nike Air Max',
      category: 'Footwear',
      tag: ['Nike', 'Air Max', 'Fashion', 'Shoes'],
      price: '$120',
      imageLink: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Nike Air 100',
      category: 'Shoes',
      tag: ['Nike', 'Air Max', 'Fashion'],
      price: '$150',
      imageLink: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Nike Air Max',
      category: 'Footwear',
      tag: ['Nike', 'Air Max', 'Fashion'],
      price: '$120',
      imageLink: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Nike Air 100',
      category: 'Shoes',
      tag: ['Nike', 'Air Max', 'Fashion'],
      price: '$150',
      imageLink: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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