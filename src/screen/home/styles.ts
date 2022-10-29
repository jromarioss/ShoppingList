import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  titleText: {
    marginTop: 16,
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 16,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  form: {
    marginTop: 32,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#b6b6b6',
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    marginRight: 10
  },
  button: {
    width: 72,
    height: 48,
    backgroundColor: '#03b5b6',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  textAmountProduct: {
    color: '#fff',
    marginBottom: 24,
  },
  textEmpyt: {
    color: '#fff',
    marginTop: 36,
    textAlign: 'center',
    fontSize: 20
  }
});