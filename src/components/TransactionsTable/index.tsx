import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">$12000</td>
                        <td>Development</td>
                        <td>02/20/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-$1500</td>
                        <td>Development</td>
                        <td>02/24/2021</td>
                    </tr>
                    <tr>
                        <td>Kernel development</td>
                        <td className="deposit">$25000</td>
                        <td>Development</td>
                        <td>03/14/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}