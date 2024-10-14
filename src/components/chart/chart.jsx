import { BarChart } from "@mui/x-charts/BarChart";
import PropTypes from "prop-types";
function MyChart({ dataset }) {
    const currentYear = new Date().getFullYear();

    const ageDistribution = {};

    dataset.forEach((person) => {
        const birthYear = new Date(person.dob).getFullYear();
        const age = currentYear - birthYear;
        const ageGroup = `${Math.floor(age / 5) * 5}-${
            Math.floor(age / 5) * 5 + 4
        }`;

        if (!ageDistribution[ageGroup]) {
            ageDistribution[ageGroup] = 0;
        }
        ageDistribution[ageGroup] += 1;
    });

    console.log(Object.keys(ageDistribution));
    return (
        <div>
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: Object.keys(ageDistribution),
                    },
                ]}
                series={[
                    {
                        data: Object.values(ageDistribution),
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
