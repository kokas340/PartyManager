import { StyleSheet } from 'react-native';

//Login
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imagebg:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor:'#fff',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
});
export { styles }