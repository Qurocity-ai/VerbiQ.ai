// import React from "react";
// import Threads from "../ReactBits/Threads";

// const Wave = () => {
//   return (
//     <div className="w-full h-[600px] relative flex justify-center items-center overflow-hidden">
//       {/* Wave Component */}
//        <div className="absolute w-full h-full z-[1]">
//         <Threads
//           color={[1.9, 0.2, 0.4]}
//           amplitude={1}
//           distance={0}
//           enableMouseInteraction={true}
//         />
//       </div>
//       <div className="absolute w-full h-full z-[1] transform scale-x-[-1]">
//         <Threads
//           color={[0, 0, 1.9]}
//           amplitude={1.2}
//           distance={0}
//           enableMouseInteraction={true}
//         />
//       </div>

//       {/* Text Elements with Wave Layout */}
//       <div className="relative z-[2] w-[90%] md:w-[80%] h-full pointer-events-none">
//         {/* Fluency */}
//         <div className="absolute left-[2%] md:left-[2%] top-[25%] md:top-[30%] animate-float">
//           <h2 className="text-[2rem] md:text-[2.5rem] text-[#5753c6] drop-shadow-md mb-4 md:mb-2">
//             Fluency
//           </h2>
//         </div>

//         {/* Cultural Understanding */}
//         <div className="absolute left-[55%] md:left-[60%] top-[20%] md:top-[25%] animate-float delay-500">
//           <h2 className="text-[1.5rem] md:text-[1.8rem] bg-gradient-to-r from-[#575aaa] to-[#ed6f6f] bg-clip-text text-transparent drop-shadow-md mb-4 md:mb-2">
//             Cultural Understanding
//           </h2>
//           <svg
//             viewBox="0 0 60 20"
//             className="w-10 md:w-14 -mt-1 mx-auto text-gradient-to-r from-[#575aaa] to-[#ed6f6f] animate-float delay-500"
//           >
//             <path
//               d="M10 0 Q30 10 10 20 M50 0 Q30 10 50 20"
//               stroke="currentColor"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>
//         </div>

//         {/* Grammar */}
//         <div className="absolute left-[5%] md:left-[20%] top-[50%] md:top-[60%] animate-float delay-200">
//           <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#5753aa] drop-shadow-md mb-4 md:mb-2">
//             Grammar
//           </h2>
//         </div>

//         {/* Vocabulary */}
//         <div className="absolute left-[55%] md:left-[90%] top-[55%] md:top-[65%] animate-float delay-700">
//           <h2 className="text-[1.5rem] md:text-[1.8rem] bg-gradient-to-r from-[#5753a0] to-[#ed6f6f] bg-clip-text text-transparent drop-shadow-md mb-4 md:mb-2">
//             Vocabulary
//           </h2>
//           <svg
//             viewBox="0 0 60 20"
//             className="w-10 md:w-14 -mt-1 mx-auto text-gradient-to-r from-[#5753a0] to-[#ed6f6f] animate-float delay-700"
//           >
//             <path
//               d="M10 0 Q30 10 10 20 M50 0 Q30 10 50 20"
//               stroke="currentColor"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Global styles */}
//       <style jsx="true" global="true">{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .delay-200 {
//           animation-delay: 0.2s;
//         }
//         .delay-500 {
//           animation-delay: 0.5s;
//         }
//         .delay-700 {
//           animation-delay: 0.7s;
//         }
//         .text-gradient-to-r {
//           background: linear-gradient(
//             to right,
//             var(--tw-gradient-from),
//             var(--tw-gradient-to)
//           );
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Wave;
import React from 'react';


const Wave = () => {
  return (
    <div className={`relative w-full aspect-[3/2] sm:aspect-[3/1] overflow-hidden  mt-30 mb-60 `}>
      {/* Wave background */}
      <img 
        src="assets/Wave.png" 
        alt="Wave" 
        className="absolute w-full h-full object-cover"
      />

<div className="relative z-[2] w-[90%] md:w-[80%] h-full pointer-events-none">
        {/* Fluency */}
        <div className="absolute left-[2%] md:left-[2%] top-[25%] md:top-[8%] animate-float">
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#5753c6] drop-shadow-md mb-4 md:mb-2">
            Fluency
          </h2>
        </div>

        {/* Cultural Understanding */}
        <div className="absolute left-[55%] md:left-[60%] top-[20%] md:top-[7%] animate-float delay-500">
          <h2 className="text-[1.5rem] md:text-[1.8rem] bg-gradient-to-r from-[#575aaa] to-[#ed6f6f] bg-clip-text text-transparent drop-shadow-md mb-4 md:mb-2">
            Cultural Understanding
          </h2>
          <svg
            viewBox="0 0 60 20"
            className="w-10 md:w-14 -mt-1 mx-auto text-gradient-to-r from-[#575aaa] to-[#ed6f6f] animate-float delay-500"
          >
            <path
              d="M10 0 Q30 10 10 20 M50 0 Q30 10 50 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Grammar */}
        <div className="absolute left-[5%] md:left-[20%] top-[50%] md:top-[70%] animate-float delay-200">
          <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#5753aa] drop-shadow-md mb-4 md:mb-2">
            Grammar
          </h2>
        </div>

        {/* Vocabulary */}
        <div className="absolute left-[55%] md:left-[104%] top-[55%] md:top-[65%] animate-float delay-700">
          <h2 className="text-[1.5rem] md:text-[1.8rem] bg-gradient-to-r from-[#5753a0] to-[#ed6f6f] bg-clip-text text-transparent drop-shadow-md mb-4 md:mb-2">
            Vocabulary
          </h2>
          <svg
            viewBox="0 0 60 20"
            className="w-10 md:w-14 -mt-1 mx-auto text-gradient-to-r from-[#5753a0] to-[#ed6f6f] animate-float delay-700"
          >
            <path
              d="M10 0 Q30 10 10 20 M50 0 Q30 10 50 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
    </div>
     {/* Global styles */}
     <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .text-gradient-to-r {
          background: linear-gradient(
            to right,
            var(--tw-gradient-from),
            var(--tw-gradient-to)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Wave;
