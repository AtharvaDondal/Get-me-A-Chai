"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { fetchpayment, initiate, fetchuser } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
// import { useSession } from "next-auth/react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

const PaymentPage = ({ username }) => {
  // const { data: session } = useSession();
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentuser, setCurrentuser] = useState({});
  const [payment, setPayment] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (decodeURI(searchParams.get("paymentdone%20") == "%20true")) {
      toast("Thanks for your donation!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    router.push(`/${username}`);
  }, []);

  const getData = async () => {
    let u = await fetchuser(username);
    setCurrentuser(u);
    let dbpayments = await fetchpayment(username);
    setPayment(dbpayments);
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentuser.razorpayid, // Enter the Key ID generated from the Dashboard, process.env.NEXT_PUBLIC_KEY_ID
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className="w-full h-48 md:h-[350] object-cover"
          src={currentuser.coverpic}
          alt="cover"
        />
        <div className="absolute right-[35%] md:right-[45%] -bottom-14 overflow-hidden rounded-full size-36 border-white border-2">
          <img
            className="rounded-full size-36"
            height={128}
            width={128}
            src={currentuser.profilepic}
            alt="profile"
          />
        </div>
      </div>
      <div className="info flex items-center justify-center py-20 flex-col gap-2">
        <div className="font-bold text-lg ">@{username}</div>
        <div className="text-slate-400">Lets help {username} get a chai!</div>
        <div className="text-slate-400">
          {payment.length} Payments . ₹
          {payment.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            {/* Show the list of all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Top 10 Supporters</h2>
            <ul className="mx-5 text-lg">
              {payment.length === 0 && <li>No payments yet</li>}
              {payment.map((p, i) => {
                return (
                  <li key={i} className="flex my-4 gap-2">
                    <img
                      className="w-8 h-8 md:w-12"
                      src="avatar.gif"
                      alt="user avatar"
                    />
                    <span>
                      {p.name}
                      <span className="font-bold"> ₹{p.amount}</span> with a
                      message "{p.message}"
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            <h2 className="my-5 font-bold text-2xl">Make a payment</h2>
            <div className="flex flex-col gap-2">
              <input
                onChange={handleChange}
                value={paymentform.name || ""}
                type="text"
                name="name"
                className="w-full rounded-lg p-3 bg-slate-800"
                placeholder="Enter name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message || ""}
                type="text"
                name="message"
                className="w-full rounded-lg p-3 bg-slate-800"
                placeholder="Enter message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount || ""}
                type="number"
                name="amount"
                className="w-full rounded-lg p-3 bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none disabled:bg-slate-600 disabled:from-purple-200 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
              >
                Pay
              </button>
            </div>
            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5 flex-col md:flex-row">
              <button
                className="p-3 bg-slate-800 rounded-lg"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="p-3 bg-slate-800 rounded-lg"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="p-3 bg-slate-800 rounded-lg"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
