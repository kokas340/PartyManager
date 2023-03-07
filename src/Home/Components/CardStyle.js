import { StyleSheet } from 'react-native';

//Home

const styles = StyleSheet.create({
  
  card: {
    marginHorizontal:20,
    backgroundColor: '#FFFAF0',
    width: 300,
    height: '40%',
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
    height: '59%',
  },
  infoCard: {
    paddingHorizontal:7,
    width: '100%',
    height: '40%',
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
  },
  creatorCard:{
 
    flexDirection:'row',
    padding:5,
    paddingTop:10,
  },
  authorName:{
      color:'grey',
      marginLeft:7,
      marginTop:3,
      fontSize:16

  },
  partyTitle:{
    fontWeight:'600',
    paddingHorizontal:9,
    fontSize:17
  },
  partyLocationText:{
    marginTop:5,
    color:'grey',
    fontSize:15,
    fontWeight:'600'

  },
  membersView:{
    padding:5,

    flexDirection:'row',
    position:'absolute',
    right:0,
    top:5
  },
  authorView:{
    flexDirection:'row'
  },
  profileImage:{
    width:30,
    height:30,
    borderRadius:30/2,
  },
  locationImage:{
    width:30,
    height:30,
    marginLeft:5
 
  },
  partyLocation:{
    flexDirection:'row'
  }




 


});
export { styles }