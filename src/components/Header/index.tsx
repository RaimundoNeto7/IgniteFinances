import logo from '../../assets/logo.svg'
import { ContainerBackground, ContainerHeader } from './styles'

export function Header() {
    return (
        <ContainerBackground>
            <ContainerHeader>
                <img src={logo} alt="my finances"/>
                <button type="button">Nova transação</button>
            </ContainerHeader>
        </ContainerBackground>
    )
}