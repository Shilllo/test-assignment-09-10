import "./table.css";

function Table({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Адрес</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person) => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.dob}</td>
                        <td>{person.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
