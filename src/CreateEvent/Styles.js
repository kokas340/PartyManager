import { StyleSheet } from 'react-native';

//CreateEvent

const styles = StyleSheet.create({

  
  header: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '2%',
    paddingTop: '7%',
    paddingBottom: '4%',
  },
  heading: {
 
    fontSize: 24,
    fontWeight: 'bold',
   
  },
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize:16
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize:20
  },
  switchText: {
    marginBottom: 10,
    fontSize:15
  },

 
});
export { styles }