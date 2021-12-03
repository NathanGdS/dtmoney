import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary(){
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        if (transaction.type ==='withdraw') {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });


    return(
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={IncomeImg} alt="Incomes"></img>
                </header>
                <strong>
                    {new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeImg} alt="Outcomes"></img>
                </header>
                <strong>-{new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(summary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"></img>
                </header>
                <strong>{new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}