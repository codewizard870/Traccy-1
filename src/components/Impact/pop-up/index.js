import "./index.scss";
const Popup = ({ showContent }) => {
  return (
    <>
      {showContent === 0 &&
        <div className='popup popup-1'>
          <div className='popup-inner'>
            {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
            <img src="/impact/map/1.png" alt="Popup" />
          </div>
        </div>
      }
      {showContent === 1 &&
        <div className='popup popup-2'>
          <div className='popup-inner'>
            {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
            <img src="/impact/map/2.png" alt="Popup" />
          </div>
        </div>
      }
      {showContent === 2 &&
        <div className='popup popup-3'>
          <div className='popup-inner'>
            {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
            <img src="/impact/map/3.png" alt="Popup" />
          </div>
        </div>
      }
      {showContent === 3 &&
        <div className='popup popup-4'>
          <div className='popup-inner'>
            {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
            <img src="/impact/map/4.png" alt="Popup" />
          </div>
        </div>
      }
      {showContent === 4 &&
        <div className='popup popup-5'>
          <div className='popup-inner'>
            {/* <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} /> */}
            <img src="/impact/map/5.png" alt="Popup" />
          </div>
        </div>
      }
    </>
  )
}

export default Popup;