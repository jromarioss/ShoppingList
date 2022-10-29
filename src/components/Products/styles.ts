import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: 10,
  },
  product: {
    backgroundColor: '#414141',
    color: '#fff',
    flex: 1,
    fontSize: 16,
    borderRadius: 6,
    marginRight: 10,
    padding: 12,
  },
  buttonDelete: {
    width: 72,
    padding: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  buttonTextEmpyt: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  }
})