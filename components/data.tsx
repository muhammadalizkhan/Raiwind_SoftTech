import React from 'react';
import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../public/img/benefit-one.png";
  import benefitTwoImg from "../public/img/benefit-two.png";
  
  const benefitOne = {
    title: "What We Provide you?",
    desc: "We Provide you a Complete Solution of Software Development Life Cycle that enhance your Bussiness and Technical communication with your customer or with your targating Point",
    image: benefitOneImg,
    bullets: [
      {
        title: "Mobile Application Development",
        desc: "Native Android & iOS App Development Cycle",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Cross Platform Application Development",
        desc: "React Native, Flutter, Ionic SDK",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Desktop Applications and Managment Softwares",
        desc: "Electorn JS",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Web Development",
    desc: "We Provide you a Complete Solution of Software Development Life Cycle that enhance your Bussiness and Technical communication with your customer or with your targating Point",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Web Development",
        desc: "Responsive Web Apps with Large Quality",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Web App Development",
        desc: "Angular React Vue Laravel Nextjs Nodejs",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "UI UX development",
        desc: "Graphics Android and IOS apps & Web Development",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};
  