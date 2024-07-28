import { Container, Links } from "./styles";
import { Header } from "../../componets/Header";

import { Button } from "../../componets/Button";
import { ButtonText } from "../../componets/ButtonText";
import { Section } from "../../componets/Section";
import { Tag } from "../../componets/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
        <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>  
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="ReactJS"/>
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
