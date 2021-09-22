import React from 'react'
import Image from '../../../common/Image';
import HocPage from '../../Hoc-Page/HocPage';
import HomeGridSystem from '../home-grid-system/HomeGridSystem';

function Home() {
    return (
        <HocPage>
            <div className='home-page'>
                <HomeGridSystem/>
            </div>
        </HocPage>
    )
}

export default Home;
