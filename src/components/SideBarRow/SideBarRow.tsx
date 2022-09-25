import React, { useEffect, useState } from 'react';

import './SideBarRow.css';

const SideBarRow = ({selected = null, url='',title=''}) => {
    const [widthView, setWidthView] = useState(0);
    useEffect(() => {
        setWidthView(window.innerWidth)
    
    
      }, []);

    return (
        <div className={` sidebarrow ${selected ? 'selected': ''}`}>
            
            <img className='header__logo' src={url} alt=""></img>

            <h6 className='sidebarrow__title'>{title}</h6>
        </div>
    )
}

export default SideBarRow;
