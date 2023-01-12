import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#262626',
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  
  inputArea: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputItem: {
    height: 58,
    flex: 1,
    paddingLeft: 12,
    backgroundColor: '#4A4A4A',
    borderRadius: 8,
    color: '#FFF',
  },

  inputUnity: {
    height: 58,
    backgroundColor: '#4A4A4A',
    borderRadius: 8,
    padding: 6,
    marginLeft: 8,
    color: '#FFF',
  },

  inputPrice: {
    width: 58,
    height: 58,
    backgroundColor: '#4A4A4A',
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
    color: '#FFF',
  },

  button: {
    width: '100%',
    height: 58,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009A3E',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },

  itemsCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },

  itemCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  itemText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  itemNumber: {
    width: 28,
    height: 20,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4A4A4A',
  },

  itemNumberText: {
    color: '#FFF',
  },
});