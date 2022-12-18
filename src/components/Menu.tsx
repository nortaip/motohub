import { IonMenu, IonPage, IonNav } from '@ionic/react';
import UserSide from './UserSide'

function Menu() {

    return (
        <>
            <IonMenu contentId="main-content">
                <UserSide/>
            </IonMenu>
        </>
    );
}
export default Menu;
