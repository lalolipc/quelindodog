import  React, { useEffect, useState } from "react";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import SideBar from "../SideBar/SideBar";
import { dataEnglish } from '../../data/dataEnglish';
import { dataSpanish } from '../../data/dataSpanish';
import { dataChinese } from '../../data/dataChinese';
import { dataRussian } from '../../data/dataRussian';
import { dataFrench } from '../../data/dataFrench';
import Perfil from "../Perfil/Perfil";

interface TopPromptProps {
  setIdList: any,
  idList: any,
  showSideBar: boolean,
  setShowSideBar: any;
}

const HomeScreen: React.FC<TopPromptProps>  = ({showSideBar=false, setIdList, idList, setShowSideBar}) => {
    const [widthView, setWidthView] = useState(0);
  
    useEffect(() => {
      setWidthView(window.innerWidth)
      if(idList==='6' && widthView < 540 )
      {
        setShowSideBar(false)
      }
    }, [])

    return (
      <>
         <div className="app__mainpage ">
              {widthView > 540 || showSideBar ?
                <SideBar setIdList={setIdList} showSideBar={showSideBar} widthView={widthView}/>
                :
                <div></div>
              }
              <div className="app__mainpage  flex-videos">
                {idList === '1' &&
                  <RecommendedVideos 
                    idMyList={'PLmIQOiA1GP0yffwE7uu2XpxPtEiz-mDjH'}
                    maxItems={20} 
                    dataList={dataEnglish as any} 
                    setShowSideBar={setShowSideBar}
                    />
                }
                {idList === '2' &&
                  <RecommendedVideos
                    idMyList={'PLmIQOiA1GP0ykrOO2s0StHv82V8axUP04'}
                    maxItems={20}
                    dataList={dataSpanish as any}
                    setShowSideBar={setShowSideBar}
                     />
                }
                {idList === '3' &&
                  <RecommendedVideos
                    idMyList={'PLmIQOiA1GP0zDC7cJRa4DD6UOsLVNHQqC'}
                    maxItems={10}
                    dataList={dataChinese as any}
                    setShowSideBar={setShowSideBar}
                     />
                }
                {idList === '4' &&
                  <RecommendedVideos
                    idMyList={'PLmIQOiA1GP0z11eO76Mfe-bwedSQlI5lK'}
                    maxItems={20}
                    dataList={dataRussian as any}
                    setShowSideBar={setShowSideBar}
                     />
                }
                {idList === '5' &&
                  <RecommendedVideos
                   idMyList={'PLmIQOiA1GP0znpsfk4vQmDUGJyAMjnTLL'}
                   maxItems={10}
                   dataList={dataFrench as any}
                   setShowSideBar={setShowSideBar}
                     />
                }
                {idList === '6' &&
                  <Perfil  setShowSideBar={setShowSideBar}/>
                }

              </div>

            </div> 
            </>
    )
}

export default HomeScreen
