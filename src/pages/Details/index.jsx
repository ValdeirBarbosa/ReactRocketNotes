import { Container, Links, Content} from "./styles";
import { Header } from "../../componets/Header";

import { Button } from "../../componets/Button";
import { ButtonText } from "../../componets/ButtonText";
import { Section } from "../../componets/Section";
import { Tag } from "../../componets/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introcução ao ReactJS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ea cupiditate architecto repellat nostrum cum cumque dignissimos! Ullam cupiditate molestias reiciendis repellat fuga esse numquam deleniti, impedit iste illo.</p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="ReactJS" />
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
