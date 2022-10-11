import React, { useContext } from "react";
import {
    CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, BarChart, Legend
} from "recharts";
import { SubjectContext } from "../../Layout/Main";


const SimpleAreaChart = () => {
    const subjects = useContext(SubjectContext)
    const SubjectArray = subjects.data


    return (
        <ResponsiveContainer className="bg-white rounded-lg " width="100%" height="100%">
            <BarChart
                width={300}
                height={300}
                data={SubjectArray}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis width="10" stroke="#1F2937" dataKey="name" />
                <YAxis stroke="#1F2937" />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#1F2937" />
            </BarChart>
        </ResponsiveContainer>
    );
};
export default SimpleAreaChart;