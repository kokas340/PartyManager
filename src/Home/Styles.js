import { StyleSheet } from 'react-native';

//Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
 
  
  header: {
    backgroundColor: '#A555EC',
    flexDirection: 'row',
    width: '100%',
    padding: '7%',
    paddingTop: '15%'
  },
  subHeader: {
    backgroundColor: '#A555EC',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  scroll:{
    backgroundColor:'#A555EC',
   
    width: '100%',
  },
  body: {
    backgroundColor: '#A555EC',
    height: '100%',
    width: '100%',
    
    paddingTop: '5%'
  },
  heading: {
    paddingHorizontal: 5,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  heading2: {
    paddingHorizontal: 5,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgba(225,225,225, 0.4)',
  },
  heading3: {
  
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  heading4: {
    position:'absolute',
    right:20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',
  },
  seeAllTouch:{
    position:'absolute',
    right:20,
  },

});
export { styles }