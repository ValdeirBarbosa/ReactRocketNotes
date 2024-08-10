import { Header } from "../../componets/Header";
import { Input } from "../../componets/Input";
import { Textarea } from "../../componets/Textarea";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>
            <Input placeholder="Titulo"/>
            <Textarea value={"Observações"}/>



        </Form>
      </main>
    </Container>
  );
}
