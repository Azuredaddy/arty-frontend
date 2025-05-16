
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Tickets = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Tickets</h1>
      <Card>
        <CardContent className="space-y-2">
          <h2 className="font-semibold">Incomplete Tickets</h2>
          <div className="flex justify-between">
            <div>14 Resolved</div>
            <div>30 Total</div>
            <div>30%</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="font-semibold">Tasks by Category</h2>
          <div className="flex space-x-4 mt-2">
            <div className="bg-blue-500 text-white px-2 py-1 rounded">Reset Password</div>
            <div className="bg-cyan-400 text-white px-2 py-1 rounded">Create Ticket</div>
            <div className="bg-red-400 text-white px-2 py-1 rounded">Install Software</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Completed Tickets</h2>
          <p>112 Completed</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tickets;
