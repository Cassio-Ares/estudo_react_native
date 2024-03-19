/**
 * ${({theme})=> theme.COLORS.PRIMARY}
 * 
 * estrutura para chamar os elementos de dentro do obj theme:
 * 
 * similar a um map ou desestruturação {({ nome do local } uma arrow function =>
 *                                                            nome_do_arquivo. estrutura de busca em obj)}
 *    
 */

import styled from 'styled-components/native';


export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: ${({theme})=> theme.COLORS.PRIMARY}
`

/**
  para corrigir o o theme não ficar com tipo any nos criamos o arquivo @types (aqui não funciona pq
   não criei o provider e tudo no arquivo app)
*/