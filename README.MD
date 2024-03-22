*React Native

Install: 
                        * npx create-expo-app --template
                        * yarn create expo
  

Recurso para visualizar meu app: 
                         * expo.dev;
                         * vysor.io (precisa de cabo USB)

**Expo - importante-
     expo build: https://expo.dev/eas
     expo go: emula sua app no seu proprio celular  https://expo.dev/go



OBS: snack.expo.dev(local para praticar e testar codigos)


 expo go install de emulador: 
                           * npx expo start 

                           apos install irá gerar um QRcode para que emulamos em nosso dispositivo



* Estrutura de pastas e estrutura React Native

 assets - pasta de imagens 

 babel.config.js - transpila o codigo para versões nativas (para android ou ios).
                   Converte de codigo de uma linguagem para outra; em React Native 
                   o codigo JS ou TS é convertido para codigos nativos de dispositivos 
                   móveis.


* olhar tsconfig.json caso ao instalar ts apareça erros pois lá vemos formas de configuração 
  deste arquivo. 

* Olhe pasta TipoDeConfiguracao para ver formas de configuração de componentes
 e tipos de configuração de estilo


* estilização global: olhar thema


* iNTALAÇÃO DE FONTS: 
  A forma mais pratica seria pelo expo já que ele nos disponibiliza isso:

       npx expo install expo-font @expo-google-fonts/inter (no lugar de inter colocamos a fonte que queremos)

  Para acessar a fonte vamos no arquivo Pai de todos no caso o APP e importamos a font 
  
  import { nome das fonts que queremos ex: inter_700Bold, inter_500Mediun } from "@expo-google-fonts/(nome da fonte ex: inter)

             * Agora para usar a fonte é nescessario importar ela e um hook chamado useFonts

import {useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
  
            * e um loader como o  ActivityIndicator para esperar a font carregar
import { ActivityIndicator } from 'react-native';

export default function App() {
           * useFonts nos usamos este hook para carregar as fontes selecionadas 

  const [ fontsLoaded ]= useFonts ({Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  return (
    <ThemeProvider theme={theme}>
        * ternario para esperar as fonts carregarem 

      {fontsLoaded ?  <Home/> : <ActivityIndicator/>}
      
    </ThemeProvider>
  
  );
}


* Navegação no app (Olhar pasta routes)
(navegação entre telas com menu de botoes na parte inferior da tela)

install do react navegation: npm install @react-navigation/native 

install instalações de auxilio ao react navegation: npx expo install react-native-screens  react-native-safe-area-context


install instalação do tipo de navegação: npm install @react-navigation/bottom-tabs