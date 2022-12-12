import { IonMenu, IonPage, IonNav } from '@ionic/react';
import User from '../components/user'

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