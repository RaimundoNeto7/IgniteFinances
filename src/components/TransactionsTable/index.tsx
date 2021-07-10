import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Questões em C</td>
                        <td className="deposit">R$ 90</td>
                        <td>Atividade</td>
                        <td>10/07/2021</td>
                    </tr>
                    <tr>
                        <td>Prova 4 de Álgebra Linear I</td>
                        <td className="withdraw">- R$ 100</td>
                        <td>Prova</td>
                        <td>09/07/2021</td>
                    </tr>
                    <tr>
                        <td>Projeto Alan</td>
                        <td className="deposit">R$ 800</td>
                        <td>Freelance</td>
                        <td>01/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}