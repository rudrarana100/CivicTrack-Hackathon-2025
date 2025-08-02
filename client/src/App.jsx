import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import FAB from './components/FAB';
import BottomNav from './components/BottomNav';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import IssueDetail from './pages/IssueDetail';
import AdminPanel from './pages/AdminPanel';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

const App = () => {
  const location = useLocation();

  // Pages where you DON'T want Navbar/FAB/BottomNav
  const noLayoutRoutes = ['/login', '/register'];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 relative">
      {!hideLayout && <Navbar />}
      <main className="pt-4 pb-24 px-4 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
        </Routes>
      </main>
      {!hideLayout && <FAB />}
      {!hideLayout && <BottomNav />}
    </div>
  );
};

export default App;
