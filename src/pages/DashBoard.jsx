import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const pieChartData = [
  { name: 'Activity A', students: 400 },
  { name: 'Activity B', students: 700 },
  { name: 'Activity C', students: 200 },
  { name: 'Activity D', students: 1000 },
];

const COLORS = ['#FFEB3B', '#00C49F', '#FFBB28', '#FF8042'];

const barChartData = [
  { activity: 'A', count: 120 },
  { activity: 'B', count: 95 },
  { activity: 'C', count: 85 },
  { activity: 'D', count: 75 },
];

function DashBoard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 p-2">
      <header className="bg-gray-500 p-4 rounded-lg shadow-lg text-white mb-4">
        <h1 className="text-3xl font-bold">Welcome to EduSupport</h1>
        <p className="text-lg mt-2">Your dashboard for managing educational activities and insights</p>
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <h2 className="text-[15px] font-semibold text-gray-500 mb-4">Activity Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieChartData} dataKey="students" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-lg">
          <h2 className="text-[15px] font-semibold text-gray-500 mb-4">Activity Count</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="activity" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FFEB3B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/courses">
          <Button className="bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
