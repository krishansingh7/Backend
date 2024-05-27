import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Admin from "./components/Admin";
import { UserProvider } from "./context/userContext";
import PathNotFound from "./components/PathNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import SuperAdmin from "./components/SuperAdmin";
import EditAdminData from "./components/EditAdminData";

function App() {
  return (
    <div className="flex justify-center h-screen w-screen">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/form" />} />
            <Route
              path="/form"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/superadmin"
              element={
                <ProtectedRoute>
                  <SuperAdmin />
                </ProtectedRoute>
              }
            />
            <Route path="/editadmindata/:id" element={<EditAdminData />} />
            <Route path="*" element={<PathNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App; 