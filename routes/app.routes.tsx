
/**
 * 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
  ** importação do react-Navigator para poder criar a estrutura das rotas

import { Home } from "../screens/Home";
import { RegisterScreen } from "../screens/RegisterScreen";

const {Navigator, Screen} = createBottomTabNavigator();

Navigator conteiner que irá receber as paginas

Screen tag que recebe os componentes para renderizar

export function AppRoutes(){
    return (
        <Navigator>
            <Screen name="Transações" component={Home}/>
            <Screen name="Cadastro" component={RegisterScreen}/>
        </Navigator>
    )
}
 * 
 */


/**Estrutura dentro do APP 
 * 
 * export default function App() {
  const [ fontsLoaded ]= useFonts ({Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>>>>>>>>>> container nescessario para renderizar as paginas 
         {fontsLoaded ?  <AppRoutes/> : <Loading/>}
      </NavigationContainer>
    </ThemeProvider>
  );
}

 */