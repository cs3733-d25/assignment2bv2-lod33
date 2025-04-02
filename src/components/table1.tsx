const Table1 = () => {
    return (
        <div>
    <table className="collapse">
        <caption> Drink Reviews</caption>
        <thead>
        <tr>
            <th>Drink</th>
            <th>Review</th>
            <th>Rating</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Espresso Martini</td>
            <td>"Best in the city" -Martin</td>
            <td> ★★★★★</td>
        </tr>
        <tr>
            <td>Old Fashioned</td>
            <td>"5 big booms!" - Big AJ</td>
            <td> BOOM BOOM BOOM BOOM BOOM</td>
        </tr>
        <tr>
            <td>Cosmopolitan</td>
            <td>"ITS PERFECT!" - Old lady</td>
            <td> ★★★★★</td>
        </tr>
        <tr>
            <td>Mojito</td>
            <td>"I can't get enough!" -Mojito Jones</td>
            <td>★★★★★</td>
        </tr>
        </tbody>
    </table>
        </div>
    )
}
export default Table1