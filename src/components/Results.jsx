import { formatter } from "../util/investment"

export default function Results({ results }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                    <th>Rough Monthly Return</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.interest * result.year)}</td>
                        <td>{formatter.format((result.annualInvestment * result.year) + result.initialInvestment)}</td>
                        <td>{formatter.format(result.interest/12)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}