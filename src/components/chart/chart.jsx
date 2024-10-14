import { BarChart } from "@mui/x-charts/BarChart";
import PropTypes from "prop-types";
function MyChart({ dataset }) {
    // const currentYear = new Date().getFullYear();

    // const ageDistribution = {};

    // dataset.forEach((person) => {
    //     const birthYear = new Date(person.dob).getFullYear();
    //     const age = currentYear - birthYear;
    //     const ageGroup = `${Math.floor(age / 5) * 5}-${
    //         Math.floor(age / 5) * 5 + 4
    //     }`;

    //     if (!ageDistribution[ageGroup]) {
    //         ageDistribution[ageGroup] = [];
    //     }
    //     ageDistribution[ageGroup].push(person);
    // });

    // Вывод распределения по возрастным группам
    // console.log(ageDistribution);
    const newArrray = dataset.map((person) => {
        person;
    });
    console.log(newArrray);

    return (
        <div>
            {/* <div>{new Date(data[0].dob).getFullYear()}</div> */}
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        // data: dataset.map((person) => dataset.indexOf(person)),
                        data: [1, 2, 3, 4],
                    },
                ]}
                series={[
                    {
                        // data: dataset.map((person) => {
                        //     new Date() - new Date(dataset[0].dob).getFullYear();
                        // }),
                        data: [1, 2, 3, 4],
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    );
}

MyChart.propTypes = {
    dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyChart;
