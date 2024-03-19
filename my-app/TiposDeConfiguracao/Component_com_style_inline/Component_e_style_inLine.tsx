// import
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


/**
 * component
 * @returns uma tag com nome APP que possui os elementos que estão dentro do retorno da função
 */
export default function App() {
  return (
    <View style={{  flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * style inline é normal como no js 
 *    lembrando que diferente do css no style inline não se separa os nomes das 
 *    propriedades css; ao escrever se usa o camelCase.
 */
