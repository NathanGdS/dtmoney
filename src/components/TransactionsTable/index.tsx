import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){
    const {transactions} = useTransactions();

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
                    {transactions.map(transactions => (
                        <tr key={transactions.id}>
                            <td>{transactions.title}</td>
                            <td className={transactions.type}>
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR'
                                }).format(transactions.amount)}
                            </td>
                            <td>{transactions.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('en-GB').format(
                                    new Date(transactions.createdAt),
                                )}
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </Container>
    );
}