import { StyleSheet } from 'react-native';

//Home

const styles = StyleSheet.create({
  
  card: {
    marginHorizontal:20,
    backgroundColor: '#FFFAF0',
    width: 300,
    height: '30%',
    borderRadius: 15,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  bannerCard: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: '100%',
    height: '60%',
  },
  infoCard: {
    width: '100%',
    height: '40%',
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
  },
  creatorCard:{
    flexDirection:'row',
    padding:5,
  },
  authorName:{
      color:'grey',
      marginLeft:7,
      marginTop:3,

  },
  partyTitle:{
    fontWeight:'700',
    paddingHorizontal:9
  },
  partyLocationText:{
    marginTop:2,
    color:'grey',

  },
  membersView:{
    padding:5,
    flexDirection:'row',
    position:'absolute',
    right:0,
  },
  authorView:{
    flexDirection:'row'
  },
  profileImage:{
    width:25,
    height:25,
    borderRadius:25/2,
  },
  locationImage:{
    width:25,
    height:25,
    marginLeft:5
 
  },
  partyLocation:{
    flexDirection:'row'
  }




 


});
export { styles }