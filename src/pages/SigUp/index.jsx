import { Container , Form, Background} from "./styles"
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import {Input,} from "../../componets/Input"
import {Button} from "../../componets/Button"

export function SigUp(){
     return(
        <Container>
                <Background/>
            <Form>
                <h1>Rocket Notes</h1>

                <p>Aplicação para salvar seus links uteis</p>

                <h2>Crie sua conta</h2>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
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
                title="Cadastrar">

                </Button>
                <a href="#">Voltar para login</a>
            </Form>
        


        </Container>
     )
}