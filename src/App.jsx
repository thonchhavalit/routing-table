import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/home/home';
import Lottie from 'react-lottie';
import { Space } from 'antd';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import { motion } from 'framer-motion'; // Import Framer Motion

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setDone(true);
      }, 1000);
    }, 1200);
  }, []);

  return (
    <>
    {/* <Layout/> */}
      <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route element={<Layout />}>
                <Route path="/home" element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  
        
    // <div>
    //   {!done ? (
    //     <motion.div
    //       initial={{ opacity: 0 }} // Initial state
    //       animate={{ opacity: 1 }} // Animate to this state
    //       exit={{ opacity: 0 }} // Exit state
    //       transition={{ duration: 0.5 }} // Transition settings
    //       className="loading"
    //     >
    //       <Space>
    //         <h1>Billing Management System</h1>
    //         {!loading ? (
    //           <Lottie options={defaultOptions} height={120} width={120} />
    //         ) : (
    //           <Lottie options={defaultOptions2} height={120} width={120} />
    //         )}
    //       </Space>
    //     </motion.div>
    //   ) : (
    //     <motion.div
    //       initial={{ opacity: 0 }} // Initial state
    //       animate={{ opacity: 1 }} // Animate to this state
    //       exit={{ opacity: 0 }} // Exit state
    //       transition={{ duration: 0.5 }} // Transition settings
    //       className="main-content" // Optional class for styling
    //     >
    //       <BrowserRouter basename="/">
    //         <Routes>
    //           <Route path="/" element={<Navigate to="/home" />} />
    //           <Route element={<Layout />}>
    //             <Route path="/home" element={<HomePage />} />
    //           </Route>
    //         </Routes>
    //       </BrowserRouter>
    //     </motion.div>
    //   )}
    // </div>
  );
}

export default App;
