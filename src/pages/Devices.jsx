
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Devices = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Devices</h1>
      <Card>
        <CardContent>
          <h2 className="font-semibold mb-2">Registered Arty Devices</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left">Device ID</th>
                <th className="text-left">Location</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ARTY001</td>
                <td>Melbourne Office</td>
                <td>Online</td>
              </tr>
              <tr>
                <td>ARTY002</td>
                <td>Sydney HQ</td>
                <td>Idle</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Devices;
