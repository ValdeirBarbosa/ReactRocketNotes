import { Input } from "../../componets/Input";
import { Container, Form,Avatar} from "./styles";
import { Button } from "../../componets/Button";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";


export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                <FiArrowLeft/>
                </a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/valdeirbarbosa.png"
                    alt="Foto do usuario"/>

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>

                </Avatar>
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
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />
                <Input
                placeholder="Nova Senha"
                type="password"
                icon={FiLock}
                />

                <Button
                title="Salvar"
                />
            </Form>

        </Container>
    )
}