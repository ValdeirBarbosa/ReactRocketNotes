import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/valdeirbarbosa.png" alt="imagem de perfil" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Valdeir Barbosa</strong>
                </div>

            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

            
            
        </Container>
    )
}