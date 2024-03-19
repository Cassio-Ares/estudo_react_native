// import
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { Container } from './styles';


/**
 * component
 * @returns uma tag com nome APP que possui os elementos que estão dentro do retorno da função
 */
export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}


/**
 * Para usar o styled-component precisamos primeiro instalar: 
 *      npm install styled-components 
 *                  ou 
 *      yarn add styled-components
 * 
 *OBS IMPORTANTE:
 *      para usarmos o styled-component com typeScript precisamos tbm instalar no ambiente de desenvolvimento (--save-dev): 
 *      npm install --save-dev @types/styled-components @types/styled-components-react-native
 *      
 */


