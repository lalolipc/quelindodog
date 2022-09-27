import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

const VideoCard = ({ image='', title='', channel='' }) => {
  const [urlVideo, setUrlVideo] = useState(null)
  const [show, setShow] = useState(false)
  const [widthView, setWidthView] = useState(0)
  useEffect(() => {
    setWidthView(window.innerWidth)
  }, [])

  return (
    <>

      {show && widthView > 540 &&

        <div className=" modal-fixed index" >
          <div >

            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>
                </div></button></div>
                <div className="video-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
                  <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" sandbox="allow-presentation allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" src={`${urlVideo}?autoplay=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay;" allowFullScreen ></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      }
      {show && widthView < 540 &&

        <div className=" modal-fixed-mobile index" >
          <div>

            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>

                </div></button></div>
                <div className="video-90vw-mobile h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
                  <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" src={`${urlVideo}?autoplay=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay;" sandbox="allow-presentation allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" allowFullScreen ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      { image &&
      <div className='videocard pointer animate__animated animate__fadeIn'>
        <img className='videocard__image pointer  ' src={image} alt='' />
        <div className="videocard__info">

          <div className="videocard__text ">
            <h4>{title}</h4>
            {/* <p className="text-green-500">{channel}</p> */}
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default VideoCard;


