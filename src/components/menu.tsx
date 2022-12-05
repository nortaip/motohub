import { IonMenu, IonPage, IonContent } from '@ionic/react';
import Profilesettings from './profilesettings'
import UserInfo from './usercard';
function Menu() {

    return (
        <>
            <IonMenu contentId="main-content">
                <div className='user-main'>
                    <UserInfo />
                </div>
                <Profilesettings />
            </IonMenu>
        </>
    );
}
export default Menu;