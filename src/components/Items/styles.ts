import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 332,
  },

  item: {
    width: '100%',
    height: 56,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#474747',
    borderRadius: 8,
  },

  rdChecked: {
    width: 28,
    height: 28,
    marginLeft: 14,
    borderColor: '#1D1D1D',
    borderWidth: 2,
    backgroundColor: '#474747',
    borderRadius: 9999,
  },

  rdCheckedImg: {
    marginLeft: 14,
  },

  textItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
  },

  textUnity: {
    fontSize: 18,
    color: '#E6E6E6',
    marginRight: 16,
  },

  textProduct: {
    fontSize: 18,
    color: '#E6E6E6',
    marginRight: 16,
    textAlign: 'left',
    flex: 1
  },
  
  textProductLineThrough: {
    fontSize: 18,
    color: '#E6E6E6',
    marginRight: 16,
    textAlign: 'left',
    flex: 1,
    textDecorationLine: 'line-through',
  },

  textPrice: {
    fontSize: 18,
    color: '#E6E6E6',
  },

  buttonDelete: {
    marginRight: 14,
    color: '#C2C2C2',
  },

  emptyArea: {
    width: '100%',
    height: 396,
    alignContent: 'center',
  },

  line: {
    height: 1,
    backgroundColor: '#474747',
    marginTop: 32,
    marginBottom: 56,
  },
  
  emptyTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#C2C2C2',
  }, 
  
  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#757575',
    marginBottom: 24,
  },

  emptyImage: {
    width: '100%',
    alignItems: 'center',
  },
});
