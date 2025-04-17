// import React from "react";

// const GlobalTalentSection = () => {
//   return (
//     <div className="bg-[#f8faff] py-16 px-4 sm:px-6 lg:px-8 mt-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Heading */}
//         <div className="text-center mb-8 md:mb-16">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#000949] mb-4 sm:mb-6">
//             Unlocking Talent Beyond Borders
//           </h1>
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto">
//             Uncover global perspectives in linguistic hiring from expert blogs
//             and trend reports to the latest in talent mobility and
//             language-driven recruitment.
//           </p>
//         </div>

//         {/* Main Image */}
//         <div className="mb-12 md:mb-20">
//           <img
//             src="/assets/Globe.png"
//             alt="Global Talent"
//             className="mx-auto w-full max-w-4xl"
//           />
//         </div>

//         {/* Content Sections */}
//         <div className="mx-auto my-10 md:my-14 px-4 md:px-10">
//           <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
//             {/* Row 1 */}
//             <div className="space-y-3 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl md:text-2xl text-[#022b41]">
//                 Embracing Global Talent
//               </h2>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 We leverage our extensive network and cross-border capabilities
//                 to tap into diverse talent pools across continents.
//               </p>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 From multilingual experts to management, technical, and data
//                 specialists, we bring together a global workforce to meet the
//                 evolving needs of modern organizations.
//               </p>
//             </div>

//             <div className="space-y-3 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl md:text-2xl text-[#022b41]">
//                 Beyond Borders
//               </h2>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 VerbiQ doesn’t hold back when it comes to hiring offshore
//                 resources.
//               </p>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 Our global reach enables us to navigate international markets
//                 seamlessly, providing organizations with the resources they need
//                 to thrive in an increasingly interconnected world.
//               </p>
//             </div>

//             {/* Row 2 */}
//             <div className="space-y-3 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl md:text-2xl text-[#022b41]">
//                 Unlock Your Global Potential
//               </h2>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 Partner with VerbiQ and unlock the power of global insights.
//               </p>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 Whether you're expanding into new markets or seeking specialized
//                 talent, trust us to be your strategic partner in navigating the
//                 complexities of global talent acquisition.
//               </p>
//             </div>

//             <div className="space-y-3 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl md:text-2xl text-[#022b41]">
//                 Multilingual Expertise
//               </h2>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 Operating in multicultural environments requires proficiency in
//                 multiple languages.
//               </p>
//               <p className="text-base md:text-lg text-[#022b41]">
//                 With VerbiQ, organizations gain access to a diverse talent pool
//                 fluent in various languages, facilitating effective
//                 communication and cultural understanding on a global scale.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Cards Grid */}
//         <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//           {/* Card 1 */}
//           <div className="md:overflow-hidden md:pl-5">
//             <img
//               src="/assets/GlobeImg1.png"
//               alt="Global Potential"
//               className="w-full md:w-85 object-cover mx-auto"
//             />
//             <div className="pt-4 pl-5">
//               <h3 className="text-lg text-[#022b41] mb-2 md:mb-4">
//                 Multilingual Talent in Manufacturing & SAP
//               </h3>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="md:overflow-hidden md:pl-6  ">
//             <img
//               src="/assets/GlobeImg3.png"
//               alt="Language Matters"
//               className="w-full md:w-85 mr-9 object-cover mx-auto"
//             />
//             <div className="pt-4">
//               <h3 className="text-lg text-[#022b41] mb-2 md:mb-4">
//                 Why Foreign Language Skills Matter In Tech
//               </h3>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="md:overflow-hidden md:pl-7 ">
//             <img
//               src="/assets/GlobeImg2.png"
//               alt="AI Future"
//               className="w-full md:w-85 mr-10 object-cover mx-auto"
//             />
//             <div className="pt-4">
//               <h3 className="text-lg text-[#022b41] mb-2 md:mb-4">
//                 Unlocking The Future Of AI
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GlobalTalentSection;
import React from "react";
import { motion } from "framer-motion";

const GlobalTalentSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-[#f8faff] py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl text-[#000949] mb-4 sm:mb-6"
          >
            Unlocking Talent Beyond Borders
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto"
          >
            Uncover global perspectives in linguistic hiring from expert blogs
            and trend reports to the latest in talent mobility and
            language-driven recruitment.
          </motion.p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <img
            src="/assets/Globe.png"
            alt="Global Talent"
            className="mx-auto w-full max-w-4xl"
          />
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mx-auto my-10 md:my-14 px-4 md:px-10"
        >
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                title: "Embracing Global Talent",
                content: [
                  "We leverage our extensive network and cross-border capabilities to tap into diverse talent pools across continents.",
                  "From multilingual experts to management, technical, and data specialists, we bring together a global workforce to meet the evolving needs of modern organizations.",
                ],
              },
              {
                title: "Beyond Borders",
                content: [
                  "VerbiQ doesn’t hold back when it comes to hiring offshore resources.",
                  "Our global reach enables us to navigate international markets seamlessly, providing organizations with the resources they need to thrive in an increasingly interconnected world.",
                ],
              },
              {
                title: "Unlock Your Global Potential",
                content: [
                  "Partner with VerbiQ and unlock the power of global insights.",
                  "Whether you're expanding into new markets or seeking specialized talent, trust us to be your strategic partner in navigating the complexities of global talent acquisition.",
                ],
              },
              {
                title: "Multilingual Expertise",
                content: [
                  "Operating in multicultural environments requires proficiency in multiple languages.",
                  "With VerbiQ, organizations gain access to a diverse talent pool fluent in various languages, facilitating effective communication and cultural understanding on a global scale.",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-3 p-4 rounded-lg shadow-sm"
              >
                <h2 className="text-xl md:text-2xl text-[#022b41]">
                  {section.title}
                </h2>
                {section.content.map((text, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-[#022b41]"
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              img: "/assets/GlobeImg1.png",
              title: "Multilingual Talent in Manufacturing & SAP",
              alt: "Global Potential",
            },
            {
              img: "/assets/GlobeImg3.png",
              title: "Why Foreign Language Skills Matter In Tech",
              alt: "Language Matters",
            },
            {
              img: "/assets/GlobeImg2.png",
              title: "Unlocking The Future Of AI",
              alt: "AI Future",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="md:overflow-hidden md:pl-5"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full md:w-85 object-cover mx-auto"
              />
              <div className="pt-4 pl-5">
                <h3 className="text-lg text-[#022b41] mb-2 md:mb-4">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalTalentSection;