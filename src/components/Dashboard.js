import Chart from "./Chart";
import Table from "./Table";
const Dashboard = () => {
    return(
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="flex space-x-4">
                <Chart />
                <Table />
            </div>
        </div>
    )
}
export default Dashboard;