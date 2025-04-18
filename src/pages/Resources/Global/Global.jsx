import React from "react";
import { motion ,AnimatePresence } from "framer-motion";
import { useEffect } from "react";


const ExpandingCard = ({ img, title, alt, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Icon Container with Hover Effect */}
      <motion.div
        className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <img src={img} alt={alt} className="w-10 h-10 object-contain" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#022b41] mb-4">{title}</h3>

      {/* Content with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[#022b41] mb-6"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Plus Button */}
      <motion.button
        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#000949] flex items-center justify-center text-white shadow-md hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-3xl font-light"
        >
          +
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

const GlobalTalentSection = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            className="text-3xl sm:text-4xl font-medium lg:text-4xl text-[#000949] mb-4 sm:mb-6"
          >
            Unlocking Talent Beyond Borders
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-xl text-gray-600 max-w-6xl mx-auto"
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
                <h2 className="text-xl font-medium md:text-2xl text-[#022b41]">
                  {section.title}
                </h2>
                {section.content.map((text, i) => (
                  <p
                  key={i}
                  className="text-justify leading-relaxed tracking-wide  text-base md:text-2sm text-[#022b41]"
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
  className="mt-12 md:mt-24  grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
>
  {[
    {
      img: "/assets/GlobeImg1.png",
      title: "Multilingual Talent in Manufacturing & SAP",
      alt: "Global Potential",
      link: "https://www.linkedin.com/pulse/multilingual-talent-manufacturing-sap-new-trends-hiring-njpuf/?trackingId=6LH156F72HmzFxgtMmX6rw%3D%3D"
    },
    {
      img: "/assets/GlobeImg3.png",
      title: "Why Foreign Language Skills Matter In Tech",
      alt: "Language Matters",
      link: "https://www.linkedin.com/pulse/why-foreign-language-skills-matter-tech-recrutorycompany-0wrrf/?trackingId=kSw4bN26MwMWywWxUei9NA%3D%3D"
    },
    {
      img: "/assets/GlobeImg2.png",
      title: "Unlocking The Future Of AI",
      alt: "AI Future",
      link: "https://www.linkedin.com/pulse/critical-role-skilled-linguists-ai-training-recrutorycompany-ijpmf/?trackingId=Mu9Tkf5yw%2F57KpSPgx0kCQ%3D%3D"
    },
  ].map((card, index) => (
    <motion.div
      key={index}
      // variants={cardVariants}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" md:overflow-hidden md:pl-5 "
    >
      <a 
        href={card.link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src={card.img}
          alt={card.alt}
          className="w-full md:w-85 object-cover mx-auto cursor-pointer"
        />
      </a>
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
