// src/components/YarnOverview.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './YarnOverview.scss';

function YarnOverview() {
    // Example data for wool, silk, and cotton
    const data = [
        { name: 'Wool', issued: 120, received: 100, returned: 30 },
        { name: 'Silk', issued: 150, received: 140, returned: 10 },
        { name: 'Cotton', issued: 200, received: 180, returned: 40 },
    ];

    return (
        <div className="yarn-overview">
            <h2>Yarn Issued Overview</h2>
            <div className="yarn-content">
                {/* Table */}
                <table className="yarn-table">
                    <thead>
                        <tr>
                            <th>Yarn Type</th>
                            <th>Issued</th>
                            <th>Received</th>
                            <th>Returned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.issued}</td>
                                <td>{item.received}</td>
                                <td>{item.returned}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Bar Chart */}
                <div className="chart-container">
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
                </div>
            </div>
        </div>
    );
}

export default YarnOverview;
