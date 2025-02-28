import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2">
                    <Link to="/" className="hover:text-gy-400">🏠 Dashboard</Link>
                </li>
                <li className="mb-2">
                    <Link to="/analytics" className="hover:text-gy-400">📊 Analytics</Link>
                </li>
            </ul>
            </aside>
    )
}
export default Sidebar;