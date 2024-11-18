// src/components/YarnIssued.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './YarnIssued.scss';

function YarnIssued() {
    // Example data for wool, silk, and cotton
    const data = [
        { name: 'Wool', issued: 120, received: 100, returned: 30 },
        { name: 'Silk', issued: 150, received: 140, returned: 10 },
        { name: 'Cotton', issued: 200, received: 180, returned: 40 },
    ];

    return (
        <div className="yarn-issued">
            <h2>Yarn Issued Comparison</h2>
            
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="issued" fill="#536def" />
                    <Bar dataKey="received" fill="#4caf50" />
                    <Bar dataKey="returned" fill="#f44336" />
                </BarChart>
            </ResponsiveContainer>

            {/* Table */}
            <table>
                <thead>
                    <tr>
                        <th>Yarn Type</th>
                        <th>Issued</th>
                        <th>Received</th>
                        <th>Returned</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.issued}</td>
                            <td>{data.received}</td>
                            <td>{data.returned}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default YarnIssued;
