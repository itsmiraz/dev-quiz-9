import React from 'react';
import {
    LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";


const data = [{ name: '2010', Students: 1000, amt: 2400 },
{ name: '2012', Students: 1000, amt: 2400 },
{ name: '2013', Students: 1200, amt: 2400 },
{ name: '2014', Students: 1800, amt: 2400 },
{ name: '2015', Students: 2000, amt: 2400 },
{ name: '2016', Students: 1500, amt: 2400 },
{ name: '2018', Students: 5000, amt: 2400 },
{ name: '2020', Students: 3000, amt: 2400 },
{ name: '2022', Students: 8000, amt: 2400 },
];
const Rechart = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ResponsiveContainer>
                <LineChart width={400}
                    height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="Students" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Rechart;