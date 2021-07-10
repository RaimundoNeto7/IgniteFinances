import logo from '../../assets/logo.svg'
import { ContainerBackground, ContainerHeader } from './styles'

interface HeaderProps {
    onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
    return (
        <ContainerBackground>
            <ContainerHeader>
                <img src={logo} alt="my finances"/>
                <button type="button" onClick={onOpenTransactionModal}>Nova transação</button>
            </ContainerHeader>
        </ContainerBackground>
    )
}