import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../componets/Header";
import {ButtonText} from "../../componets/ButtonText"
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

      </Content>
      <NewNote>
        <FiPlus/>
        Criar Nota

      </NewNote>

    </Container>
  );
}
