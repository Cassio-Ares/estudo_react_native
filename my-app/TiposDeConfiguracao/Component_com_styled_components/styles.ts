/**
 * Apos instalações preciso importar: 
 *    import styled from 'styled-components/native';
 */

import styled from 'styled-components/native';

/**
 * A partir disto nesta pagina podemos criar tag personalizadas com nosso estilo com a
 * seginte sintaxe: 
 *    export const Container = styled.View (View é uma tag do native que equivale a div)`
 * 
 *    export const "nome que queremos dar a tag" = styled.tag que queremos que seja`
 *       os estilos css que queremos colocar 
 *    `
 * 
 * 
 *   agora exportamos para a pagina com: 
 * 
 *   import { nome da tag } from '/style'; e podemos usar 
 */

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #fff;
`