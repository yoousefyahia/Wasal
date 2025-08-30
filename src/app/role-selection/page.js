"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState("market-dealer");

  const roles = [
    {
      id: "market-dealer",
      name: "Market Dealer",
      image: "/market.png"
    },
    {
      id: "raw-material-dealer",
      name: "Raw Material Dealer",
      image: "/material.png"
    },
    {
      id: "factory",
      name: "Factory",
      image: "/factory.png"
    },
    {
      id: "worker",
      name: "Worker",
      image: "/worker.png"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Wasal</h1>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-8">
              <Link href="/" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-900 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select your role
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role to access the tools and services made just for you
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`relative cursor-pointer transition-all duration-200 ${
                selectedRole === role.id
                  ? "ring-4 ring-blue-500 ring-offset-4"
                  : "hover:scale-105"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <Image
                    src={role.image}
                    alt={role.name}
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {role.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="text-center">
          <button
            onClick={() => {
              switch(selectedRole) {
                case "raw-material-dealer":
                  window.location.href = "/raw-material-dealer";
                  break;
                case "market-dealer":
                  console.log("Market Dealer selected");
                  break;
                case "factory":
                  window.location.href = "/factory";
                  break;
                case "worker":
                  window.location.href = "/worker";
                  break;
                default:
                  console.log("Selected role:", selectedRole);
              }
            }}
            className="bg-[#448AB1] text-white px-16 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
