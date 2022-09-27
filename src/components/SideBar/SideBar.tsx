import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import './SideBar.css';
import confetti from 'canvas-confetti';

interface TopPromptProps {
    setIdList: any,
    widthView: number,
    showSideBar: boolean
}
export const SideBar: React.FC<TopPromptProps>  = ({ setIdList, widthView = 0, showSideBar = false }): any => {

    const getLocationCanva=(number:string)=>{
        switch (number) {
            case '1':
                return 0.1;
                break;
            case '2':
                return 0.2;
                break;
            case '3':
                return 0.3;
                break;
            case '4':
                return 0.4;
                break;
            case '5':
                return 0.5;
                break;
                
            default:
                return 0.1;
        }
    }
    const onClick = (number: string) => {
        setIdList(number);
        const locationCanva=getLocationCanva(number);
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: locationCanva, x:0}
        });
      };
    return (
        <div className={`animate__animated ${widthView > 540 ? 'sidebar' : 'sidebar-mobile' } ${showSideBar ? 'animate__fadeInLeft' : '' }` }> 
            <button onClick={() =>onClick('1')}>
                <SideBarRow url="https://2.bp.blogspot.com/-Tsm4oXVoYik/XEzeCFRjQ1I/AAAAAAAAHIM/VqxZ-hbI2Qcaq6llAHzGTX56jC7bmrkAwCK4BGAYYCw/s640/Flag%2BUnited%2BStates.png" title='English' />              
            </button> 
            <button onClick={()  =>onClick('2')}>
                <SideBarRow url="https://4.bp.blogspot.com/-ESGFmY9BLNE/XEysE63C_tI/AAAAAAAAHEc/svSz8ScwXXQc-Qph_591KVteI4cq52xdACK4BGAYYCw/s1600/Argentina%2BFlag.png" title='Spanish' />
            </button>
            <button onClick={()  =>onClick('3')}>
                <SideBarRow url="https://cdn.countryflags.com/thumbs/china/flag-round-250.png" title='Chinese' />
            </button>
            <button onClick={()  =>onClick('4')}>
                <SideBarRow url="https://cdn.countryflags.com/thumbs/russia/flag-3d-round-250.png" title='Russian' />
            </button>
            <button onClick={()  =>onClick('5')}>
                <SideBarRow url="https://2.bp.blogspot.com/-q0OooaMxa2I/XENAwabjSOI/AAAAAAAAG-g/mlQ1wpfbudQwFvseYYXfD_8Ox1UkukY6wCK4BGAYYCw/s640/France%2BFlag.png" title='French' />
            </button>
        </div>

    )
}

export default SideBar;