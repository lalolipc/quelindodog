import React, { useState, useEffect } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
interface HeaderProps {
  onClick: any,
  setIdList: any;
}
  const Header: React.FC<HeaderProps>=({onClick,setIdList})=> {
  const [widthView, setWidthView] = useState(0)

  const openModal = () => {

    setIdList('6');
  }
  useEffect(() => {
    setWidthView(window.innerWidth)
  }, [])

  return (
    <>
      <div className='header'>

        <div className="header__left">
          {widthView < 540 &&
            <button className="border-none-boton" onClick={() => onClick()}><MenuIcon /></button>
          }
        </div>
        <div className="">
          <img src={`${widthView > 540 ? '../title-big.png' : '../title-small.png' } `} className="animate__animated animate__bounce "></img>
          </div> 
          
        <div className="header__right mr-5">
          <button onClick={() => openModal()} className="block ml-auto">
            <Avatar
              alt='Tiziano'
              src='/tizi.jpg'
            />
          </button>

        </div>

      </div>
    </>
  )
}

export default Header;
