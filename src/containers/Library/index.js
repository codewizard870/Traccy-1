import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Steps } from 'antd';
import { SvgIcon } from '../../components/common';
import './index.scss';

import Traccyicon from '../../assets/images/icon.png';
import LogoLight from '../../assets/images/logo-light.png';
import { Navbar } from '../../components/layout';
import Title from './Title';
import FunctionTitle from './FunctionTitle';
import FilesWrapper from './FilesWrapper';
import Information from './Information';

const Library = () => {

   return (
      <div className='library-wrapper'>
         <div className="polygon-effect">
            <img src="/invest-form/left-hexa.svg" alt="polygon-left" />
            <img src="/invest-form/right-hexa.svg" alt="polygon-right" />
         </div>
         <div className='leftbar'>
            <div className='traccy-icon'>
               <img src={Traccyicon} alt='Logo' />
            </div>
            {/* <div className="function-icon-list">
               <div className="function-icon">
                  <div className="icon-wrapper">
                     <img src="/library/home.svg" alt="home" />
                  </div>
                  <span>Home</span>
               </div>
               <div className="function-icon">
                  <div className="icon-wrapper">
                     <img src="/library/files.svg" alt="files" />
                  </div>
                  <span>Files</span>
               </div>
               <div className="function-icon">
                  <div className="icon-wrapper">
                     <img src="/library/recent.svg" alt="recent" />
                  </div>
                  <span>Recent</span>
               </div>
               <div className="function-icon">
                  <div className="icon-wrapper">
                     <img src="/library/favorite.svg" alt="favorite" />
                  </div>
                  <span>Favorite</span>
               </div>
               <div className="function-icon">
                  <div className="icon-wrapper">
                     <img src="/library/back.svg" alt="back" />
                  </div>
                  <span>Back</span>
               </div>
            </div> */}
            <div className='social-icon-list'>
               <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
               <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
               <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
               <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
            </div>
         </div>
         <div className='right-section'>
            <div className='header-bar'>
               <Navbar />
            </div>
            <div className='rightbar-inner'>
               <div className='dtl-section'>
                  <div className="content-panel">
                     <Title />
                     {/* <FunctionTitle /> */}
                     <FilesWrapper />
                  </div>
                  <Information />
               </div>
            </div>
         </div>
      </div>
   )
};

export default Library;
