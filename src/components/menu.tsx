import React from 'react';
import {
    IonMenu,

} from '@ionic/react';
import Profilesettings from './profilesettings'

function Menu() {
    
    return (
        <>
            <IonMenu contentId="main-content">
                <div className='user-main'>
                    <h4 className='whh'>Мамед Мамедов</h4>
                    <h5 className='whh'>Просто хороший парень</h5>
                    <p className='user-badge'>проверенный</p>
                </div>
                <Profilesettings/>
            </IonMenu>
        </>
    );
}
export default Menu;