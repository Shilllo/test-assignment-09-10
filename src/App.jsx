import "./App.css";
import Table from "./components/table/table";
import Chart from "./components/chart/chart";
function App() {
    const data = [
        {
            id: 1,
            name: "Иван Иванов Иванович",
            dob: "1990-01-01",
            address: "Москва",
            position: "директор",
            sex: "м",
            status: "активен",
            employment: "удаленно",
            phoneNumber: "+7 999 999 99 99",
            email: "qWQpC@example.com",
        },
        {
            id: 2,
            name: "Петр Петров Петрович",
            dob: "1995-02-02",
            address: "Санкт-Петербург",
            position: "менеджер",
            sex: "м",
            status: "неактивен",
            employment: "удаленно",
            phoneNumber: "+7 999 999 99 99",
            email: "qWQpC@example.com",
        },
        {
            id: 3,
            name: "Алексей Алексеев Алексеевич",
            dob: "2000-03-03",
            address: "Казань",
            position: "менеджер",
            sex: "м",
            status: "активен",
            employment: "удаленно",
            phoneNumber: "+7 999 999 99 99",
            email: "qWQpC@example.com",
        },
        {
            id: 4,
            name: "Анна Аннова Аннововна",
            dob: "2005-04-04",
            address: "Москва",
            position: "менеджер",
            sex: "ж",
            status: "активен",
            employment: "удаленно",
            phoneNumber: "+7 999 999 99 99",
            email: "qWQpC@example.com",
        },
    ];

    return (
        <div>
            <Table data={data} />

            {/* <Chart dataset={data} /> */}
        </div>
    );
}

export default App;
