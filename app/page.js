import Image from "next/image";
import "./page.css";
import Hero from "./src/components/Hero/hero";
import HeaderImagePage from "@/public/Image/HeaderImage/HeaderImage";
// import HowItWorks from "@/public/Image/HowItWorks/HowItWorksImage";
import HowItWorks from "@/public/Image/howitworks/howitworks";


export default function Home() {
  return (
    // <h1>Home page</h1>
    <html lang="en">
    <HeaderImagePage/>      
    <Hero/>
    <HowItWorks/>


    </html>
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
