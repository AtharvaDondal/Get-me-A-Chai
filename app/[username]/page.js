import React from "react";
// import dynamic from "next/dynamic";
import PaymentPage from "@/components/PaymentPage";
// const PaymentPage = dynamic(() => import('../components/PaymentPage'), { ssr: false });

const Username = ({ params }) => {
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;


export async function generateMetadata({params}){
  return{
    title:`Support ${params.username} - Get Me A Chai`
  }
}
