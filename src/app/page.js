"use client";

import { useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { FaHome, FaCalendarAlt, FaUsers, FaTable, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';


// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Data for LineChart
  const data = {
    labels: ["13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "24-25"],
    datasets: [
      {
        label: "Season Performance",
        data: [70, 65, 75, 80, 60, 85, 90, 95, 85, 80, 70, 75], // Update with actual data for each season
        fill: false,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "#DA291C", // Manchester United red
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to fill the container
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: '#333' },
        ticks: { color: '#DA291C' }, // Manchester United red
      },
      y: {
        beginAtZero: true,
        grid: { color: '#333' },
        ticks: { color: '#DA291C' }, // Manchester United red
      },
    },
  };

  const topScorers = [
    { name: "Wayne Rooney", goals: 253, image: "/rooney.jpg" },
    { name: "Sir Bobby Charlton", goals: 234, image: "/bobby.jpg" },
    { name: "Denis Law", goals: 221, image: "/denis.jpg" },
    { name: "Ryan Giggs", goals: 164, image: "/giggs.jpg" },
    { name: "George Best", goals: 161, image: "/best.jpg" },
    { name: "Mark Hughes", goals: 154, image: "/hughes.jpg" },
    { name: "Paul Scholes", goals: 153, image: "/scholes.jpg" },
    { name: "Dennis Viollet", goals: 152, image: "/viollet.jpg" },
    { name: "Ruud Van Nistelrooy", goals: 150, image: "/ruud.jpg" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Marquee */}
      <div className="bg-red-700 text-white py-2 text-center">
        <marquee behavior="scroll" direction="left">
          Manchester United FC: Latest News, Upcoming Matches, and More!
        </marquee>
      </div>

      {/* Navbar for Hamburger Menu */}
      <div className="flex items-center bg-red-700 p-4 text-white">
        <button
           className="p-2 border border-black bg-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="flex-grow text-center font-bold text-xl">Manchester United Dashboard</div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`lg:w-64 lg:bg-red-700 lg:p-4 lg:flex lg:flex-col fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}
        >
          {/* User Profile */}
          <div className="flex items-center space-x-4 bg-red-800 p-4 rounded-lg mb-4">
            <Image
              src="/images.png"
              alt="User Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">User Name</h3>
              <p className="text-sm">Favorite Player: Player X</p>
              <p className="text-sm">Recent Interaction: Manchester United vs. Team Y</p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                  <FaHome />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#matches" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                  <FaCalendarAlt />
                  <span>Matches</span>
                </a>
              </li>
              <li>
                <a href="#players" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                  <FaUsers />
                  <span>Players</span>
                </a>
              </li>
              <li>
                <a href="#league-table" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                  <FaTable />
                  <span>League Table</span>
                </a>
              </li>
              <li>
                <a href="#club-info" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                  <FaInfoCircle />
                  <span>Club Info</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>


        {/* Image and Main Content */}
        <main className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Image Above Content */}
          <div className="flex-shrink-0">
            <Image
              src="/d60699dbbc58ec04c2bb42159ab41165.jpg" // Replace with your image path
              alt="Manchester United"
              width={600}
              height={100}
              className="w-full object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Header Section */}
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-red-700 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-red-700 lg:p-4">
                Manchester United Dashboard
              </p>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Image
                  src="/Manchester_United_F.C.-Logo.wine.svg"
                  alt="Manchester United Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-800">
                <h2 className="mb-3 text-2xl font-semibold">Total Wins</h2>
                <p className="text-4xl">25</p>
              </div>

              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-800">
                <h2 className="mb-3 text-2xl font-semibold">Goals Scored</h2>
                <p className="text-4xl">68</p>
              </div>

              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-800">
                <h2 className="mb-3 text-2xl font-semibold">Trophies</h2>
                <p className="text-4xl">20</p>
              </div>
            </div>

            {/* Graphs Section */}
            <div className="relative flex flex-col items-center w-full lg:max-w-5xl">
              {/* Performance Graph */}
              <div className="relative w-full max-w-4xl h-80 bg-gray-800 rounded-lg mb-8 p-4 overflow-hidden">
                <h2 className="text-xl font-semibold text-white">Season Performance</h2>
                <div className="w-full h-full overflow-hidden">
                  <Line data={data} options={options} />
                </div>
              </div>

              {/* Player Stats Graph */}
              <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold">Top Scorers</h2>
                <div className="overflow-y-auto max-h-80">
                  <div className="space-y-4">
                    {topScorers.map((player, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
                        <Image
                          src={player.image}
                          alt={player.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">{player.name}</h3>
                          <p className="text-sm">Goals: {player.goals}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
