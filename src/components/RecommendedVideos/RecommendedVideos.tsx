import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './RecommendedVideos.css';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
interface TopPromptProps {
  idMyList?: string,
  maxItems?: number,
  dataList?:string,
  setShowSideBar: any
}
const RecommendedVideos: React.FC<TopPromptProps> = ({ idMyList='', maxItems=0 ,dataList = null, setShowSideBar}):any => {
  const [videoCards, setVideoCards] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [urlVideo, setUrlVideo] = useState('')
  const [show, setShow] = useState(false)
  const [widthView, setWidthView] = useState(0);

  const openModal = (res:any) => {
    const resultIni = res?.split("watch?v=");
    const newUrl:string = resultIni[0] + 'embed/' + resultIni[1];
    const urlFinal=newUrl.concat('?autoplay=1&loop=1');
    setUrlVideo(urlFinal);
    setShow(true);
    setShowSideBar(false);
  }
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${idMyList}&maxResults=${maxItems}&key=${`AIzaSyAg-wyIVJRRaGd3NMa6mIt32NdUJNPhXTo`}`)
      .then(response => {
        createVideoCards(response.data.items );        
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
      })
  }, [idMyList, maxItems])

  useEffect(() => {
    setWidthView(window.innerWidth)
  }, [])


  async function createVideoCards(videoItems: any) {
    const newVideoCards: any = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      // const response = await axios
      //   .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${`AIzaSyAg-wyIVJRRaGd3NMa6mIt32NdUJNPhXTo`}`)
      // const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;
      const image = snippet?.thumbnails?.medium?.url;
      const views = "";
      const timestamp = '';

      const channel = snippet.channelTitle;
      const idUrl = snippet.resourceId.videoId;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        idUrl
      });
    }
    setVideoCards(newVideoCards);
   
    setIsLoading(false);
  }

// if(videoCards.length == 0 ){
//   setVideoCards(dataList);
//   setIsError(false);
//   setIsLoading(false)
// }
 if(isError) {
  setVideoCards(dataList);
  setIsError(false);
  setIsLoading(false)
  }
  // if(isError) {
  //   return <Alert severity="error" className='loading'>No Results found!</Alert>
  // }
  return (
    <>
      {show && 

        <div className={`index ${widthView < 540 ? 'modal-fixed-mobile  mt-5': 'modal-fixed' }`} >
          <div >

            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white animate__animated ${show ? "animate__fadeInDown " : "animate__fadeOutDown"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>
                </div></button></div>
                <div className={`h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 ${widthView < 540 ? 'video-90vw-mobile': 'video-90vw' }`}>
                  <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px"  sandbox="allow-presentation allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" src={`${urlVideo}`} title="YouTube video player" allow="accelerometer; autoplay;"  allowFullScreen ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      }


    { isLoading? 
  <CircularProgress  className={`${widthView < 540 ? 'loading ml-40': 'loading ml-10' }`} color='secondary' /> : 
  <>
  {!show && 
  <div className={`recommendedvideos__videos ${widthView < 540 ? 'recommendedvideos__mobile': 'recommendedvideos__desktop mt-5 flex justify-start' }`}>        
          {            
            videoCards.map((item: any, index: string)=> {
              return (
                item &&
                <div key={index} className="pointer">
                  <button onClick={() => openModal(`https://www.youtube.com/watch?v=${item?.idUrl}`)} className="block ml-auto">
                    <VideoCard
                      title={item?.title ?? ''}
                      image={item?.image  ?? ''}
                      channel={item?.channel  ?? ''}
                    />
                  </button>
                </div>
            
              )
            })           
          }
        </div> 
   }
   </>
    }
      
    </>)
}

export default RecommendedVideos;
