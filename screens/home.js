import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import Header from "../components/Header";

export default function Home() {
  const category = [
    	{
        title: 'Footwear',
        iconLink: 'https://img.icons8.com/stickers/48/000000/pair-of-sneakers.png'
      },
      {
        title: 'Beauty',
        iconLink: 'https://img.icons8.com/stickers/100/000000/lip-gloss.png'
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
  ];

  return (
    <View style={styles.container}>
      <Header title="Our E-commerce App" />      
      <View style={styles.categoryContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.categoryTitle}>Category</Text>
          <Text style={styles.seeMore}>See All</Text>
        </View>
        <View style={styles.categoryRow}>
          {category.map((item, index) => {
            return (
              <TouchableOpacity>
                <View style={styles.iconContainer}>
                  <Image style={styles.categoryIcon} source={{uri: item.iconLink}}>
                  </Image>            
                </View>
                <Text style={styles.eachCategoryTitle}>{item.title}</Text>
              </TouchableOpacity>    
            )
          })}
          
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productRow}>
          {products.map((item, index) => {
            return (
              <View style={styles.eachProduct}>
                <Image style={styles.productImage} source={{uri: item.imageLink}}></Image>
                <Text style={styles.productTitle}>{item.title}</Text>
                <View style={styles.tagContainer}>
                  {item.tag.map((tag, index) => {
                    return (                      
                      <Text style={styles.productTag}>{tag}</Text>                                        
                    )
                  })}
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            )
          })}         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#FBEFEF',
        height: '100%',        
        // justifyContent: 'center',
        alignItems: 'center',
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
      alignItems: 'flex-end',
    },
    categoryTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    seeMore: {
      color: 'grey',      
    },
    categoryRow: {
        flexDirection: 'row',
    },
    iconContainer: {
      padding: 5,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    categoryIcon: {
      height: 50,
      width: 50,
    },
    eachCategoryTitle: {
      textAlign: 'center',
    },
    productContainer: {
      height: '80%',
      width: '100%',
      overflow: 'scroll',
    },
    productRow: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    eachProduct: {
      padding: 5,
      margin: 5,
      width: 180,
      // height: 200,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    productImage: {
      height: 120,
      width: '100%',
      borderRadius: 10,
    },
    productTitle: {
      marginTop: 3,
      fontSize: 16,
    },
    tagContainer: {
      marginTop: 3,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflow: 'scroll',    
    },
    productTag: {
      whiteSpace: 'nowrap',
      paddingLeft: 5,
      paddingRight: 5,
      color: '#555',
      backgroundColor: '#ddd',
      marginEnd: 5,
      borderRadius: 4,      
    },
    price: {
      fontSize: 22,
      fontWeight: 'bold',
    },
});