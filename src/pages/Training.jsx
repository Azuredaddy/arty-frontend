
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Training = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Training</h1>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Pending Training Tickets</h2>
          <ul className="list-disc list-inside">
            <li>Ticket #001 - Confidence: 82%</li>
            <li>Ticket #002 - Confidence: 74%</li>
            <li>Ticket #003 - Confidence: 66%</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Train Selected</button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Trained Tasks</h2>
          <ul className="list-disc list-inside">
            <li>Reset Password Workflow</li>
            <li>Software Installation Flow</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Training;
