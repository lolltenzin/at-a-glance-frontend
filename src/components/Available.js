// src/components/Available.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,  } from 'recharts';
import './Available.scss';

function Available() {
    // Example data for wool and silk for 4 weeks
    const woolData = [
        { week: 'Week 1', woolIn: 100, woolOut: 80 },
        { week: 'Week 2', woolIn: 150, woolOut: 120 },
        { week: 'Week 3', woolIn: 200, woolOut: 180 },
        { week: 'Week 4', woolIn: 250, woolOut: 230 },
    ];

    const silkData = [
        { week: 'Week 1', silkIn: 50, silkOut: 40 },
        { week: 'Week 2', silkIn: 100, silkOut: 90 },
        { week: 'Week 3', silkIn: 120, silkOut: 100 },
        { week: 'Week 4', silkIn: 150, silkOut: 140 },
    ];

    return (
        <div className="available">
            <h2>Available Yarn Data (Wool and Silk)</h2>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={woolData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="woolIn" fill="url(#woolInGradient)">
                            {woolData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`url(#woolInGradient)`} />
                            ))}
                        </Bar>
                        <Bar dataKey="woolOut" fill="url(#woolOutGradient)">
                            {woolData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`url(#woolOutGradient)`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="overview-text">
                <p>Wool In and Out data for the last 4 weeks.</p>
            </div>
        </div>
    );
}

export default Available;
