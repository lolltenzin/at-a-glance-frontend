import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import DyeingReports from './components/DyeingReports';
import DyeingMasters from './components/DyeingMasters';
import YarnIssued from './components/YarnIssued';
import TotalSqmtOfCarpets from './components/TotalSqmtOfCarpets';
import Available from './components/Available';
import Dashboard from './components/Dashboard';
import YarnOverview from './components/YarnOverview'; // Import YarnOverview
import './App.scss';

function App() {
    return (
        <Router>
            <div className="app">
                {/* Sidebar navigation */}
                <aside className="sidebar">
                    <div className="logo">
                        <Link to="/" className="text_none">My App</Link>
                    </div>
                    <div className="links">
                        <ul>
                            <span className="spann">Navigation</span>
                            <li>
                                <Link to="/dashboard" className="text_none">
                                    <span className="icon">🏠</span>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                            <Link to="/total-sqmt-of-carpets" className="text_none">
                                    <span className="icon">📐</span>
                                    Total Sqmt of Carpets
                                </Link>
                                
                            </li>
                            <li>
                            <Link to="/yarn-overview" className="text_none"> {/* Add YarnOverview link */}
                                    <span className="icon">🧵</span>
                                    Yarn Overview
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="/yarn-issued" className="text_none">
                                    <span className="icon">📜</span>
                                    Yarn Issued
                                </Link>
                            </li>
                            <li>
                                <Link to="/dyeing-reports" className="text_none">
                                    <span className="icon">📊</span>
                                    Dyeing Reports
                                </Link>
                              
                            </li>
                            <li>
                            <Link to="/dyeing-masters" className="text_none">
                                    <span className="icon">🧶</span>
                                    Dyeing Masters
                                </Link>
                                
                            </li>
                            <li>
                            <Link to="/available" className="text_none">
                                    <span className="icon">✔️</span>
                                    Available
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main content */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dyeing-reports" element={<DyeingReports />} />
                        <Route path="/dyeing-masters" element={<DyeingMasters />} />
                        <Route path="/yarn-issued" element={<YarnIssued />} />
                        <Route path="/total-sqmt-of-carpets" element={<TotalSqmtOfCarpets />} />
                        <Route path="/available" element={<Available />} />
                        <Route path="/yarn-overview" element={<YarnOverview />} /> {/* Add YarnOverview route */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
