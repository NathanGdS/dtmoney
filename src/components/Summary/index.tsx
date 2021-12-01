import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={IncomeImg} alt="Incomes"></img>
                </header>
                <strong>$1000.00</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeImg} alt="Outcomes"></img>
                </header>
                <strong>-$500.00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"></img>
                </header>
                <strong>$500.00</strong>
            </div>
        </Container>
    );
}