import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
const Dashboard = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-bgDark flex items-center justify-center text-white">
        Loading Dashboard...
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex bg-bgDark min-h-screen">
      <Sidebar role={user.role} />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;