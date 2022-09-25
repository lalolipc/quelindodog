import { useEffect, useState } from "react";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import SideBar from "../SideBar/SideBar";
import { dataEnglish } from '../../data/dataEnglish';
import { dataSpanish } from '../../data/dataSpanish';

const HomeScreen = ({showSideBar=false}) => {
    const [widthView, setWidthView] = useState(0);
    const [idList, setIdList] = useState('1');
  
    useEffect(() => {
      setWidthView(window.innerWidth)
      // setIdList(idList)  
    }, [])

    return (
         <div className="app__mainpage ">
              {widthView > 540 || showSideBar ?
                <SideBar setIdList={setIdList} showSideBar={showSideBar} widthView={widthView}/>
                :
                <div></div>
              }
              <div className="app__mainpage  flex-videos">
                {idList === '1' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0yffwE7uu2XpxPtEiz-mDjH'} maxItems={20} dataList={dataEnglish as any} />
                }
                {idList === '2' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0ykrOO2s0StHv82V8axUP04'} maxItems={20} dataList={dataSpanish as any}/>
                }
                {idList === '3' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0zDC7cJRa4DD6UOsLVNHQqC'} maxItems={10} dataList={dataSpanish}/>
                }
                {idList === '4' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0z11eO76Mfe-bwedSQlI5lK'} maxItems={20} dataList={dataSpanish}/>
                }
                {idList === '5' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0znpsfk4vQmDUGJyAMjnTLL'} maxItems={10} dataList={dataSpanish}/>
                }

              </div>
            </div> 
    )
}

export default HomeScreen
