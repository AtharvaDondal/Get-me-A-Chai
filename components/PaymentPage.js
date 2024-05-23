"use client";
import React, { useState } from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setpaymentform] = useState({});

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
    console.log(paymentform);
  };

  const pay = async (amount) => {
    let a = await initiate(amount, session?.user.name, paymentform);
    let orderId = a.id;
    var options = {
      key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.URL}/api/razorpay`,
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

  // const handlePayment = async (amount) => {
  //   const name = paymentform.name || "Customer Name"; // Replace with default or actual input from the form
  //   const address = {
  //     line1: paymentform.addressLine1 || "Address Line 1",
  //     city: paymentform.city || "City",
  //     state: paymentform.state || "State",
  //     postal_code: paymentform.postalCode || "Postal Code",
  //     country: "IN", // Country code for India
  //   };

  //   try {
  //     const response = await fetch("/api/create-checkout-session", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount, name, address }),
  //     });

  //     const session = await response.json();

  //     if (response.ok) {
  //       const stripe = await stripePromise;
  //       const result = await stripe.redirectToCheckout({
  //         sessionId: session.id,
  //       });

  //       if (result.error) {
  //         console.error(result.error.message);
  //       }
  //     } else {
  //       console.error(session.error);
  //     }
  //   } catch (error) {
  //     console.error("Error creating checkout session:", error);
  //   }
  // };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className="w-full h-[350] object-cover"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1717459200&token-hash=fHNiZ33l1XVgIiIyrcBLCZboOBZXYUMJKoF1BnJuH0M%3D"
          alt=""
        />
        <div className="absolute right-[45%] -bottom-14 border-white border-2 rounded-full">
          <img
            className="rounded-full"
            height={120}
            width={120}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHE1OeJMfZeQ7dhzZZnTrOu286k9tLYyxyFOfVKA-s7jUpDAIEFKQMo_Wp-g&s"
            alt=""
          />
        </div>
      </div>
      <div className="info flex items-center justify-center py-20 flex-col gap-2">
        <div className="font-bold text-lg ">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          10,916 members84 . posts . $18,040/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            {/* Show the list of all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              {/* List of supporters */}
              <li className="flex my-4 gap-2">
                <img src="avatar.gif" width={30} alt="user avatar" />
                <span>
                  Atharva donated <span className="font-bold">₹30</span> with a
                  message I support you bro. lots of ❤️
                </span>
              </li>
              <li className="flex my-4 gap-2">
                <img src="avatar.gif" width={30} alt="user avatar" />
                <span>
                  Atharva donated <span className="font-bold">₹30</span> with a
                  message I support you bro. lots of ❤️
                </span>
              </li>
              <li className="flex my-4 gap-2">
                <img src="avatar.gif" width={30} alt="user avatar" />
                <span>
                  Atharva donated <span className="font-bold">₹30</span> with a
                  message I support you bro. lots of ❤️
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10 text-white">
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
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Pay
              </button>
            </div>
            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button
                className="p-3 bg-slate-800 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="p-3 bg-slate-800 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="p-3 bg-slate-800 rounded-lg"
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
