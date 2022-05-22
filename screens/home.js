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
});