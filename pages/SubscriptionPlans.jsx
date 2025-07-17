// import React from 'react'
// import { Eye, EyeOff, ArrowLeft, Link } from 'lucide-react';


// function SubscriptionPlans() {
//   const plans = [
//     {
//       name: "Starter",
//       price: "500/month",
//       description: "For new advocates getting started with online leads.",
//       features: [
//         "Up to 10 Verified Leads/month",
//         "Basic Profile Listing",
//         "Email Notifications",
//         "Standard Support",
//       ],
//       highlight: false,
//     },
//     {
//       name: "Growth",
//       price: "1000/month",
//       description: "For practicing advocates aiming to grow their clientele.",
//       features: [
//         "Up to 40 Verified Leads/month",
//         "Priority Listing in Search",
//         "Direct Client Chat Access",
//         "Lead Insights Dashboard",
//         "Priority Support",
//       ],
//       highlight: true,
//     },
//     {
//       name: "Pro Plus",
//       price: "2000/month",
//       description: "For top advocates who want maximum visibility and lead volume.",
//       features: [
//         "Unlimited Verified Leads",
//         "Top Placement in Listings",
//         "Real-time Lead Alerts",
//         "Dedicated Account Manager",
//         "24/7 Premium Support",
//       ],
//       highlight: false,
//     },
//   ];

//   return (
//     <div className=" flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 items-center justify-center md:px-12">
//       <div className="flex flex-col items-center justify-center w-full">
//       <div className="p-4">
//         <Link
//          to ='/'
//         >
//                 <ArrowLeft size={18} className="mr-2" />
//                 Back to Home
//         </Link>
//             </div>
//         <h1 className="text-3xl font-bold text-center mb-12  text-gray-800">
//           Choose Your Plan
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative rounded-2xl border transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-8 bg-white ${plan.highlight
//                   ? "border-gray-200 ring-2 ring-yellow-700"
//                   : "border-gray-200"
//                 }`}
//             >
//               {plan.highlight && (
//                 <div className="absolute top-0 right-0 px-3 py-1 text-black text-xs font-bold rounded-tr-2xl rounded-bl-2xl animate-blink">
//                 Most Popular
//               </div>
              
//               )}
//               <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
//               <p className="text-4xl font-extrabold text-blue-600 mt-2">
//                 {plan.price}
//               </p>
//               <p className="text-gray-500 mt-2 mb-6">{plan.description}</p>
//               <ul className="mb-6 space-y-3">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-gray-700">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               {/* <button className='px-10' >
//               Subscribe
//             </button> */}
//               <button onClick={() => { console.log(`subscribe clicked ${plan.price}`) }} className="block mx-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-white-700 transition">
//                 Subscribe
//               </button>
//             </div>
//           ))}
//         </div>
//         <div />
//       </div>
//     </div>
//       );
// };
//       export default SubscriptionPlans