import  "styled-components/native";
import thema from "../thema";


declare module 'styled-components'{
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{}
}

/**
 * Arquivo de type criado para informar o typescript o type do theme.
 */