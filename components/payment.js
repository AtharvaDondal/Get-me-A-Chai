"use server";
import Razorpay from "razorpay";
import { initiate } from "@/actions/useractions";
import Script from "next/script";
import { useSession } from "next-auth/react";

const payment = async (amount) => {
    const {data: session} = useSession()
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
  <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>;
};

export default payment;
