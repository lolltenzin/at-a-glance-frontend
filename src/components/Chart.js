// src/components/Chart.js
import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from 'recharts';
import './chart.scss';

const data = [
    { name: 'WS', total: 700 },
    { name: 'HNS', total: 1250 },
    { name: 'DR', total: 1410 },
    { name: 'LD', total: 1100 },
    { name: 'ADV', total: 700 },
    { name: 'HR', total: 1000 },
    { name: 'NB', total: 1250 },
];

function Chart({ height, title }) {
    return (
        <div className="chart_sec">
            <div className="title">
                <p>{title} (Last 1 year)</p>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <AreaChart
                    width={850}
                    height={height}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="totals" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#536def" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#536def" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="strokee" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#536def"
                        fillOpacity={1}
                        fill="url(#totals)"
                    />
                </AreaChart>
            </div>
        </div>
    );
}

export default Chart;
