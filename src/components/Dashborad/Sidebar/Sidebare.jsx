import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
export default function Sidebare() {
  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/" },
    { icon: "fa-users", title: "User Management", path: "/Users" },
    { icon: "fa-building", title: "Projects Management", path: "/Projects"},
    { icon: "fa-building", title: "Developer Management", path: "/Developers"},
    { icon: "fa-user", title: "Cms" },
    { icon: "fa-message", title: "Live chat"},
  ]



  return (

    <aside className={` ${style.sidebar} min-vh-100 py-4 `}>
      <div className="fw-semibold px-4 mb-4 fs-4">DASHBOARD</div>

      <nav>
        {links.map((item, index) => (
             <NavLink
            to={item.path}
            className={`${style.navItem} d-flex align-items-center gap-3 py-3 px-4 `}
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span className="fs-5">{item.title}</span>
          </NavLink>
        ))}
      </nav>

    </aside >

  )
}
