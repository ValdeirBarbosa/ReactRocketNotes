import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../componets/Header";
import {ButtonText} from "../../componets/ButtonText"
import {Section} from "../../componets/Section"
import {Note} from "../../componets/Note"
import {FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from "../../componets/Input";
export function Home() {
  return (
    <Container>
      <Brand>
       <h1>Rocket Notes</h1>
      </Brand>
      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="ReactJS"/></li>
        <li><ButtonText title="NodeJS"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar titulo" icon={FiSearch}/>

      </Search>
      <Content>
        <Section title="<Minhas Notas/>">
          <Note data={{
            title:"ReactJS", 
            tags:[
              {id:'1', name:"React"},
              {id:'2', name:"Rocketseat"},
            ]
            }}/>
          <Note data={{
            title:"Exemplo de Middleware", 
            tags:[
              {id:'1', name:"Express"},
              {id:'2', name:"Axios"},
            ]
            }}/>

        </Section>

      </Content>
      <NewNote>
        <FiPlus/>
        Criar Nota

      </NewNote>

    </Container>
  );
}
