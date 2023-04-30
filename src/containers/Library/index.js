import React from 'react';
import { SvgIcon } from '../../components/common';
import './index.scss';

import Traccyicon from '../../assets/images/icon.png';
import Title from './Title';
import FilesWrapper from './FilesWrapper';
import Information from './Information';

const Library = () => {

   return (
      <div className='library-wrapper'>
         <div className="polygon-effect">
            <img src="/invest-form/left-hexa.png" alt="polygon-left"/>
            <img src="/invest-form/right-hexa.png" alt="polygon-right"/>
         </div>
         <div className='leftbar'>
            <div className='traccy-icon'>
               <img src={Traccyicon} alt='Logo' />
            </div>
            <div className='social-icon-list'>
               <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
               <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
               <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
               <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
            </div>
         </div>
         <div className='right-section'>
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
