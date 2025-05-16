
import React from "react";
import { Pie, Line } from "react-chartjs-2";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Welcome, Admin</h1>
      <Card>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h2 className="text-lg font-medium">Confidence Status</h2>
            <p>Arty can currently complete 98% of tasks with 95% confidence.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Go Live</button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Confidence Trend</h3>
            <Line
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun"],
                datasets: [{ label: "Confidence", data: [58, 68, 78, 85, 92, 98] }],
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Task Type Breakdown</h3>
            <Pie
              data={{
                labels: ["Reset Password", "Create Ticket", "Install Software"],
                datasets: [
                  {
                    data: [45, 30, 25],
                    backgroundColor: ["#3B82F6", "#F59E0B", "#EF4444"],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
