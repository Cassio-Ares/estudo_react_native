// import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


/**
 * component
 * @returns uma tag com nome APP que possui os elementos que estão dentro do retorno da função
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


/**
 * StyleSheet (obs lembrar de importar o StyleSheet do react-native)
 * 
 * 
 * com o StyleSheet.create criamos um obj com os dados de estilização que podemos 
 * levar para parte do componente que queremos estilizar 
 * 
 * ex: <View  style={styles.container}>
 *      * View nome do componente que é igual a uma div;
 *      * style é como se fosse className para que já trabalhou com react
 *      * style.container é a forma de chamar uma parte especifica dentro de um obj 
 *        o obj com nome style e dentro dele a parte com nome de container
 * 
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
