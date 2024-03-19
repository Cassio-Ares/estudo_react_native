// import
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Container } from "./styles";

/**
 * component
 * @returns uma tag com nome APP que possui os elementos que estão dentro do retorno da função
 */
export default function Estilizaco_com_thema() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

/**
 * Para que o thema posso funcionar precisamos usar uma "função ou recurso " chamado de PROVAIDER
 * ele precisa ser chamado no arquivo mais alto de preferencia para que possa ser acessado de qualquer filho
 * no nosso caso ele seria montado no arquivo APP que é o mais alto.
 * sintaxe:
 *      Importações 
 *                        import {ThemeProvider} from 'styled-components';
 *                        import theme from 'a localização do arquivo theme';
 *
 *                        export default function Estilizaco_com_thema() {
 *                                return (
 *   ThemeProvider:                     <ThemeProvider   theme={theme}>      obj theme sendo chamado
 *       englobando os arquivos                     <Home/>
 *                                       </ThemeProvider>
 *                                     );
 *                                  }
 *
 */
