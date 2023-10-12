import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./index.css"
import Hero from './components/herosection/Hero';
import Testimonial from './components/testimonial/Testimonial';
import Choseus from './components/choseus/Choseus';
import Courses from './components/courses/Courses';
import Opinion from './components/opinin/Opinion';
import Getintach from './components/contact/Getintach';
import Servises from './components/heroserver/Servises';
import Ourstory from './components/heroserver/Ourstory';
import Ourcourses from './components/courses/Ourcourses';
import Content from './components/shered/Content';
import Overviwe from './components/webdevelopment/Overviweonbenfites';
import Curriculum from './components/shered/Curriculum';
import { Curriculum_list_programing, overviwecontent } from './content/Index';
import assest from './assets/imges';
import Instrectar from './components/shered/Instrectar';
import Bgcontent from './components/shered/Bgcontent';
import Degitil_markting from './components/pathes/Degitil_markting';

const AppLayout = ():JSX.Element => {
    return <div className="landing_page">
    <Header />
    <Outlet />
    <Footer />
  </div>;

};

const router = createBrowserRouter([
  {path:"/" , element:<AppLayout />,
  children:[
  {path:"/" , element:<>   
  <Hero />,
  <Testimonial />,
  <Choseus />,
  <Courses />,
  <Opinion />,
  <Getintach bgcolor='bg-white' textcolor = "text-gray_scondary" bordercolor = "bg-[#B4B4B4]" />
  <Content  bgcolor={"bg-primery"} fontcolor={"text-white"} />
  </>},
  {path:"servsies" , element:
  <>
  <Servises />
  <Ourstory />
  <Ourcourses />
  <Getintach bgcolor="" textcolor={''} bordercolor={''}/>
  <Content  bgcolor={"bg-[#B4B4B4]"} fontcolor={"text-[#2A2A2A]"} />
  </>
  } , 
  {path:"web_developer" , 
  element:<>
  <Bgcontent img={assest.web_development_bg} titel={"Web Development Mastery"} pargraf={"Whether you're looking to upskill for your current job or embark on a new career path, our courses are designed to give you a competitive edge."}  />
  <Overviwe arraycontent={overviwecontent} overviwe_img={assest.overviwe_webdeveloopment} />
  <Curriculum  pargraf={'The innovative educational platform designed to bridge the gap between traditional college education and the fast-paced demands of the IT industry.'}
  titelofcourse={'Web Development Mastery'} img_of_course={assest.progarming_img} list={Curriculum_list_programing} />
  <Instrectar img={assest.progarming_img_instracter} name={'Sarah Johnson'} pargraf={'Sarah Johnson is an industry expert with over 10 years of experience in web development and front-end design. With a passion for both teaching and coding, she brings a wealth of knowledge to our "Web Development Mastery" course. Sarah has worked with renowned companies such as Tech Innovators and Digital Solutions Group, contributing to award-winning projects that have left a mark in the industry.'} />
  </>} ,
  {path:"Digital_Marketing" , element:<Degitil_markting />}
  ]}
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
