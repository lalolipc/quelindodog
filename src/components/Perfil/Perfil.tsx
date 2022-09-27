/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import './Perfil.css';
import Avatar from '@material-ui/core/Avatar';

interface PerfilProps{
  setShowSideBar: any;
}
const Perfil: React.FC<PerfilProps> = ({setShowSideBar}) => {

  const [widthView, setWidthView] = useState(0);
  
  useEffect(() => {
    setWidthView(window.innerWidth);
    setShowSideBar(false);
  }, [])


  return (
    <>
              <div className={`index ${widthView > 540 ? "m-auto md:px-40 lg:px-64 pt-10" : "m-auto px-5 pt-10" }`} >
           <div >

             <div role="switch" aria-checked={"true"} tabIndex={0}  className={`grid h-full flex-row md:mt-24 xs:p-5 xs:mt-28 dg-fadeInFromTop`}>
               <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                 <div className="modal-absolute right-0 pt-2 pr-2">
                 </div>
                 <div >
                 <p className="text-black font-bold">ALL Babies can be Multilingual</p>
           <small className="text-base text-gray-700 flex flex-nowrap pt-2 text-left">Research shows that a baby's brain is hardwired for ALL languages...But this ability slowly decreases month after month.So, don't wait! Immerse your baby in a multitude of sounds early on. Any foreign language will be processed and memorized easily... Boy are babies lucky!</small>

           <small className="text-base text-black font-bold flex flex-nowrap justify-center pt-10">The method Bilingual songs</small>
           <small className="text-base flex flex-nowrap pt-1 justify-start text-left">Music offers another proven way to enrich your child's vocabulary in a second language. And like books, music can go with you almost anywhere, whether you're listening to your favorite playlist in the car or just singing as you walk along.

 Most children love music and find it easy to learn lyrics, especially because they can listen to the same song over and over again. There's no lack of quality children's music in languages other than English. </small>
                   </div>
                   <small className={`text-base text-blue-900 font-bold flex flex-nowrap justify-end ${widthView > 540 ? " pt-10" : "pt-2 " }`}>Good luck!</small>
                   <small className="text-base text-gray-900 flex flex-nowrap justify-end ">Rocio Gocella, Mar del Plata, Buenos Aires, Argentina.</small>


                   <button onClick={() => window.open('https://www.linkedin.com/in/rociogocella/')} className="block ml-auto">
                     <Avatar
                      alt='Tiziano'
                      src='/logoLinkedin.jpg'
                    />
                  </button>
              </div>
            </div>
          </div>
        </div>

    </>)
}

export default Perfil;
