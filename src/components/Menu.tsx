import { IonMenu, IonPage, IonNav } from '@ionic/react';
import User from './user'

function Menu() {

    return (
        <>
            <IonMenu contentId="main-content">
                <User/>
            </IonMenu>
        </>
    );
}
export default Menu;
