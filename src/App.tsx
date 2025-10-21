import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import HomeAdminDashboard from './pages/HomeAdminDashboard';
import Shifts from './pages/Shifts';
import ShiftDetails from './pages/ShiftDetails';
import Timesheets from './pages/Timesheets';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="home-admin" element={<HomeAdminDashboard />} />
            <Route path="shifts" element={<Shifts />} />
            <Route path="shift/:id" element={<ShiftDetails />} />
            <Route path="timesheets" element={<Timesheets />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
