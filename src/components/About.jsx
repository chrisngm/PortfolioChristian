import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const PDF_FILE_URL_PLAQINGE = 'http://localhost:5173/Plaquette-ingetis.pdf';
// const PDF_FILE_URL_CALINGE = 'http://localhost:5173/Calendrier_paris_ESI_3_2022.pdf';
// const PDF_FILE_URL_CV = 'http://localhost:5173/CV_-_Gaël_Luntala.pdf';

const downloadFileAtURL = ({url}) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const ServiceCard = ({ index, title, icon, file }) => (
   <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      onClick={()=>{downloadFileAtURL(file)}}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full yellow-blue-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
   </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Á propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
      >
        Au cours de cette année, j'ai eu l'opportunité d'effectuer mon alternance au sein de l'entreprise Soleo en tant qu'assistant chef de projet vente et marketing.
        Cette expérience m'a permis de développer de solides compétences en matière de gestion de projet, de communication et de marketing.<br />
        Durant cette année en alternance, je me suis vue confier des missions à responsabilité. J'ai notamment été en charge de tout le pôle marketing. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
