import React from "react";
import styles from "../style";
import { cap,telangana } from "../assets"; // Assume you have an appropriate icon for downloads

// Import your files as before
import ppt1 from "../assets/downloads/CAP Module 1 .pptx";
import ppt2 from "../assets/downloads/CAP Module 2.pptx";
import ppt3 from "../assets/downloads/CAP Module 3.pptx";
import ppt4 from "../assets/downloads/CAP Module 4.pptx";
import ppt5 from "../assets/downloads/CAP III Training.pptx";
import ppt6 from "../assets/downloads/Investiture ceremony ppt (1).pptx";
import ppt7 from "../assets/downloads/02-02-2023 presentation of CAP modules.pptm";
import ppt8 from "../assets/downloads/Module 4 .pptx";
import doc1 from "../assets/downloads/Messages pocket book redited 1.docx";
import doc2 from "../assets/downloads/Messages pocket book.docx";
import doc3 from "../assets/downloads/Module 1 CAP lesson plan.docx";
import doc4 from "../assets/downloads/Module 2 CAP lesson plan.docx";
import doc5 from "../assets/downloads/module 3 leaflet (1).docx";
import doc6 from "../assets/downloads/Module 3 CAP lesson plan.docx";
import doc7 from "../assets/downloads/Module 4 e-leaflet.docx";
import doc8 from "../assets/downloads/Module 4 CAP lesson plan.docx";
import doc9 from "../assets/downloads/NOTE ON FIRST ACTIVITY IN CYBER AMBASSADOR PLATFORM.docx";
import doc10 from "../assets/downloads/post assessment bilingual.docx";
import doc11 from "../assets/downloads/Post-Assessment Module 2.docx";
import doc12 from "../assets/downloads/question bank telugu.docx";
import doc13 from "../assets/downloads/QUESTIONNAIRE.docx";
import pdf1 from "../assets/downloads/CAP Module 1 .pdf";
import pdf2 from "../assets/downloads/CAP Project - Phase IV Process Flow.pdf";
import pdf3 from "../assets/downloads/CAP Project - Telangana (A4).pdf";
import pdf4 from "../assets/downloads/CAP Project - Telangana.pdf";
import pdf5 from "../assets/downloads/COMPARITIVE ANALYSIS OF VARIOUS PHASES OF CAP.pdf";
import pdf6 from "../assets/downloads/English Infographic Booklet.pdf";
import pdf7 from "../assets/downloads/Telugu Infographic Booklet.pdf";
import pdf8 from "../assets/downloads/m-2.pdf";

const downloads = [
  { id: 1, name: "CAP MODULE 1", file: ppt1, type: "PPTX" },
  { id: 2, name: "CAP MODULE 2", file: ppt2, type: "PPTX" },
  { id: 3, name: "CAP MODULE 3", file: ppt3, type: "PPTX" },
  { id: 4, name: "CAP MODULE 4", file: ppt4, type: "PPTX" },
  { id: 5, name: "CAP III Training", file: ppt5, type: "PPTX" },
  { id: 6, name: "Investiture Ceremony", file: ppt6, type: "PPTX" },
  { id: 7, name: "Presentation of CAP Modules", file: ppt7, type: "PPTM" },
  { id: 8, name: "Module 4 Presentation", file: ppt8, type: "PPTM" },
  { id: 9, name: "Messages pocket book redited 1", file: doc1, type: "DOCX" },
  { id: 10, name: "Messages pocket book", file: doc2, type: "DOCX" },
  { id: 11, name: "Module 1 CAP lesson plan", file: doc3, type: "DOCX" },
  { id: 12, name: "Module 2 CAP lesson plan", file: doc4, type: "DOCX" },
  { id: 13, name: "Module 3 Leaflet", file: doc5, type: "DOCX" },
  { id: 14, name: "Module 3 CAP Lesson Plan", file: doc6, type: "DOCX" },
  { id: 15, name: "Module 4 Leaflet", file: doc7, type: "DOCX" },
  { id: 16, name: "Module 4 CAP Lesson Plan", file: doc8, type: "DOCX" },
  { id: 17, name: "NOTE ON FIRST ACTIVITY IN CYBER AMBASSADOR PLATFORM", file: doc9, type: "DOCX" },
  { id: 18, name: "Post Assessment Bilingual", file: doc10, type: "DOCX" },
  { id: 19, name: "Post-Assessment Module 2", file: doc11, type: "DOCX" },
  { id: 20, name: "Question bank telugu", file: doc12, type: "DOCX" },
  { id: 21, name: "QUESTIONNAIRE", file: doc13, type: "DOCX" },
  { id: 22, name: "CAP Module 1", file: pdf1, type: "PDF" },
  { id: 23, name: "CAP Module 2", file: pdf8, type: "PDF" },
  { id: 24, name: "CAP Project - Phase IV Process Flow", file: pdf2, type: "PDF" },
  { id: 25, name: "CAP Project - Telangana (A4)", file: pdf3, type: "PDF" },
  { id: 26, name: "CAP Project - Telangana", file: pdf4, type: "PDF" },
  { id: 27, name: "COMPARITIVE ANALYSIS OF VARIOUS PHASES OF CAP", file: pdf5, type: "PDF" },
  { id: 28, name: "English Infographic Booklet", file: pdf6, type: "PDF" },
  { id: 29, name: "Telugu Infographic Booklet", file: pdf7, type: "PDF" },
];

const Downloads = () => {
  const renderDownloads = (type) => {
    return downloads
      .filter((download) => download.type === type)
      .map((download) => (
        <div
          key={download.id}
          className="border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold text-white mb-4">{download.name}</h2>
          <p className="mb-4 text-gray-500">Type: {download.type}</p>
          <a
            href={download.file}
            download
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Download
          </a>
        </div>
      ));
  };

  return (
    <>
      <section id="downloads" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
            <img src={telangana} alt="downloads" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Downloads</span> for <span className="text-white">Cyber Ambassador</span> Program
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Downloads <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Cyber Ambassador</span> 
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Resources.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Access and download various resources related to the Cyber Ambassador Program, including presentations, documents, and PDFs.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={cap} alt="downloads" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>
      
      <section className="mt-10 md:mt-20 px-6 md:px-16">
        <h2 className="text-2xl text-center text-white font-semibold mb-6">PPTX/PPTM Files</h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDownloads("PPTX")}
          {renderDownloads("PPTM")}
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-white mb-6">DOCX Files</h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDownloads("DOCX")}
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-white mb-6">PDF Files</h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDownloads("PDF")}
        </div>
      </section>
    </>
  );
};

export default Downloads;
