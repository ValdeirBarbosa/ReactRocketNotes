import { Container , Form, Background} from "./styles"
import {FiMail, FiLock} from 'react-icons/fi'
import {Input,} from "../../componets/Input"
import {Button} from "../../componets/Button"

export function SigIn(){
     return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>

                <p>Aplicação para salvar seus links uteis</p>

                <h2>Faça seu login</h2>
                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />
                <Button
                title="Entrar">

                </Button>
                <a href="#">Criar conta</a>
            </Form>
            <Background/>


        </Container>
     )
}