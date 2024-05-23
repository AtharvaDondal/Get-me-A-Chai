import React from "react";
// import dynamic from "next/dynamic";
import PaymentPage from "@/components/PaymentPage";
// const PaymentPage = dynamic(() => import('../components/PaymentPage'), { ssr: false });

const Username = ({ params }) => {
  return (
    <>
    payment Page
    <PaymentPage username = {params.username} />
    </>
  );
};

export default Username;
