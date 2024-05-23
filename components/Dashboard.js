"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [router, session]);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mx-auto py-5">
        <h1 className="text-center my-5 text-3xl font-bold">
          Welcome to your Dashboard
        </h1>
        <form className="max-w-2xl mx-auto">
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              value={form.name ? form.name : ""}
              onChange={handlechange}
              name="name"
              id="name"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              value={form.email ? form.email : ""}
              onChange={handlechange}
              name="email"
              id="email"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              value={form.username ? form.username : ""}
              onChange={handlechange}
              name="username"
              id="username"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="profile"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              Profile Picture
            </label>
            <input
              type="text"
              value={form.profile ? form.profile : ""}
              onChange={handlechange}
              name="profile"
              id="profile"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              Cover Picture
            </label>
            <input
              type="text"
              value={form.coverpic ? form.coverpic : ""}
              onChange={handlechange}
              name="coverpic"
              id="coverpic"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              razorpay Id
            </label>
            <input
              type="text"
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handlechange}
              name="razorpayid"
              id="razorpayid"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              razorpay Secret
            </label>
            <input
              type="text"
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handlechange}
              name="razorpaysecret"
              id="razorpaysecret"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="razorpay"
              className="block mb-2 text-sm font-medium text-gray-50xa dark:text-white"
            >
              razorpay credentials
            </label>
            <input
              type="text"
              value={form.razorpay ? form.razorpay : ""}
              onChange={handlechange}
              name="razorpay"
              id="razorpay"
              className="block bg-gray-500 w-full p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:bg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focusring-blue-500 rounded-lg text-white text-xs"
            />
          </div>
          <div className="my-6">
            <button
              type="submit"
              className="w-full block p-2 text-white bg-blue-500 rounded-lg hover: hover:bg-blue-600 focus:outline-none focus:ring-4"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
