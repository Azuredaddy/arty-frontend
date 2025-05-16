
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Admin = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Confidence Threshold</h2>
          <input
            type="range"
            min="50"
            max="100"
            defaultValue="95"
            className="w-full"
          />
          <p className="mt-2">Adjust Arty's confidence level for task automation.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Automation Rules</h2>
          <ul className="list-disc list-inside">
            <li>Do not call users after 6 PM</li>
            <li>Only escalate after two failed attempts</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
