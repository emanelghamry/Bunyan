import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebare from "../components/Dashborad/SideBar/Sidebare";
import StatusPages from "./StatusPages";
import UsersPages from "./UsersPages";
import DeveloperPages from "./DeveloperPages";
import ProjectsPages from "./ProjectsPages";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebare />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPages />} />
            <Route path="/Users" element={<UsersPages />}>
              <Route index element={<TableDashboard title="Users" add="Add New User" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/Projects" element={<ProjectsPages />} >
              <Route index element={<TableDashboard title="Projects" add="Add New Project" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/Developers" element={< DeveloperPages />}>
              <Route index element={<TableDashboard title="Developers" add="Add New Developer" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
