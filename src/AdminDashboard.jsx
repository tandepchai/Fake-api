import React, { useState, useEffect } from "react";
import { FiUsers, FiTruck, FiActivity, FiDollarSign, FiPlus, FiSearch, FiEdit2, FiTrash2, FiCheck, FiX, FiBell } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [providers, setProviders] = useState([]);
  const [listings, setListings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch data from API
    // This is just dummy data for demonstration
    setProviders([
      { id: 1, name: "Acme Rentals", contact: "contact@acmerentals.com", services: ["Car", "Van"], location: "New York" },
      { id: 2, name: "City Wheels", contact: "info@citywheels.com", services: ["Car", "Bike"], location: "Los Angeles" },
    ]);
    setListings([
      { id: 1, vehicle: "Sedan", price: 50, available: true, location: "New York" },
      { id: 2, vehicle: "SUV", price: 80, available: false, location: "Los Angeles" },
    ]);
    setBookings([
      { id: 1, user: "John Doe", vehicle: "Sedan", status: "Confirmed", duration: "3 days", payment: "Paid" },
      { id: 2, user: "Jane Smith", vehicle: "SUV", status: "Pending", duration: "5 days", payment: "Unpaid" },
    ]);
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Provider" },
    ]);
    setNotifications([
      { id: 1, message: "New service provider registration", read: false },
      { id: 2, message: "New booking request", read: false },
    ]);
  }, []);

  const chartData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4500 },
    { name: "May", revenue: 6000 },
    { name: "Jun", revenue: 5500 },
  ];

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Total Providers</h3>
          <FiUsers className="text-blue-500 text-2xl" />
        </div>
        <p className="text-3xl font-bold mt-2">{providers.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Total Listings</h3>
          <FiTruck className="text-green-500 text-2xl" />
        </div>
        <p className="text-3xl font-bold mt-2">{listings.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">User Activity</h3>
          <FiActivity className="text-orange-500 text-2xl" />
        </div>
        <p className="text-3xl font-bold mt-2">{users.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <FiDollarSign className="text-purple-500 text-2xl" />
        </div>
        <p className="text-3xl font-bold mt-2">$24,000</p>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderProviders = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Service Providers</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <FiPlus className="mr-2" /> Add Provider
        </button>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search providers..."
            className="w-full px-4 py-2 border rounded-md pr-10"
          />
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Services</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <tr key={provider.id} className="border-b">
                <td className="px-4 py-2">{provider.name}</td>
                <td className="px-4 py-2">{provider.contact}</td>
                <td className="px-4 py-2">{provider.services.join(", ")}</td>
                <td className="px-4 py-2">{provider.location}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 mr-2" aria-label="Edit provider">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500" aria-label="Delete provider">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderListings = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Rental Listings</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
          <FiPlus className="mr-2" /> Add Listing
        </button>
      </div>
      <div className="mb-4 flex space-x-4">
        <select className="border rounded-md px-4 py-2">
          <option>All Vehicle Types</option>
          <option>Car</option>
          <option>Van</option>
          <option>Bike</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>All Locations</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Vehicle</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Availability</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id} className="border-b">
                <td className="px-4 py-2">{listing.vehicle}</td>
                <td className="px-4 py-2">${listing.price}/day</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${listing.available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {listing.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-4 py-2">{listing.location}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 mr-2" aria-label="Edit listing">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500" aria-label="Delete listing">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Bookings and Reservations</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Vehicle</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="px-4 py-2">{booking.user}</td>
                <td className="px-4 py-2">{booking.vehicle}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${booking.status === 'Confirmed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-2">{booking.duration}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${booking.payment === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {booking.payment}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-green-500 mr-2" aria-label="Confirm booking">
                    <FiCheck />
                  </button>
                  <button className="text-red-500" aria-label="Cancel booking">
                    <FiX />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 mr-2" aria-label="Edit user">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500" aria-label="Delete user">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://images.unsplash.com/photo-1533850595620-7b1711221751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="Logo" />
                <span className="ml-2 text-xl font-semibold">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <FiBell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 rounded-md ${activeTab === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("providers")}
              className={`px-4 py-2 rounded-md ${activeTab === "providers" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Providers
            </button>
            <button
              onClick={() => setActiveTab("listings")}
              className={`px-4 py-2 rounded-md ${activeTab === "listings" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Listings
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`px-4 py-2 rounded-md ${activeTab === "bookings" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-md ${activeTab === "users" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Users
            </button>
          </div>

          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "providers" && renderProviders()}
          {activeTab === "listings" && renderListings()}
          {activeTab === "bookings" && renderBookings()}
          {activeTab === "users" && renderUsers()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;