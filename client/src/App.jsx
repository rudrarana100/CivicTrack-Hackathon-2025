import React from 'react';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import IssueDetail from './pages/IssueDetail';
import AdminPanel from './pages/AdminPanel';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import { Routes, Route } from 'react-router-dom';  // REMOVE BrowserRouter here!
import FAB from './components/FAB';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/issue/:id" element={<IssueDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
        </Routes>
        <FAB/>
        <BottomNav />
    </>
  );
};

export default App;
