import "./page.css";
import Hero from "./src/components/Hero/hero";
import HeaderImagePage from "@/public/Image/HeaderImage/HeaderImage";
// import HowItWorks from "@/public/Image/HowItWorks/HowItWorksImage";
import HowItWorksImage from "@/public/Image/howitworks/howitworks";
import HowItWorksSection from "./src/components/HowItWorks/how-it-works";

//Import fonts
import { Aleo } from "next/font/google";
const aleo = Aleo({ subsets: ["latin"] });

export default function Home() {
  return (
    <body className={aleo.className}>
      <html lang="en">
        <HeaderImagePage/>      
        <Hero/>
        <HowItWorksImage/>
        <HowItWorksSection/>
      </html>
    </body>
  );
}


//Make image component
//Create folder with image
//Create image file
//Create function for component
//Import image from next.js
//Render image from next and pass src
//Export image component
//Import image component into page.js
