
import {
    IonMenu,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonToggle,
} from '@ionic/react';
import { helpCircleOutline, helpBuoyOutline, moon, shieldOutline, documentTextOutline, chevronForwardOutline, notificationsOutline, languageOutline, personCircleOutline, lockClosedOutline, keyOutline } from 'ionicons/icons';
function Menu() {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

    return (
        <>
            <IonList inset={true}>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={personCircleOutline} />
                    <IonLabel className='user-p'>Личная информация</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={notificationsOutline} />
                    <IonLabel className='user-p'>Уведомления</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={languageOutline} />
                    <IonLabel className='user-p'>Язык приложения</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={lockClosedOutline} />
                    <IonLabel className='user-p'>Конфиденциальность</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={keyOutline} />
                    <IonLabel className='user-p'>Смена пароля</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
            </IonList>
            <IonList inset={true}>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={documentTextOutline} />
                    <IonLabel className='user-p'>Как устроен MotoHub</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={shieldOutline} />
                    <IonLabel className='user-p'>Центр безопасности</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={helpBuoyOutline} />
                    <IonLabel className='user-p'>Помощь</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem className='list'>
                    <IonIcon className='user-icon' icon={helpCircleOutline} />
                    <IonLabel className='user-p'>Обратная связь</IonLabel>
                    <IonIcon className='user-icon' icon={chevronForwardOutline} />
                </IonItem>
                <IonItem lines="none">
                    <IonIcon className='user-icon' slot="start" icon={moon} />
                    <IonLabel className='user-p'>Dark Mode</IonLabel>
                    <IonToggle
                        slot="end"
                        name="darkMode"
                        onIonChange={toggleDarkModeHandler}
                    />
                </IonItem>
            </IonList>
            <IonList inset={true}>
                <IonItem className='list'>
                    <IonLabel className='user-p'>Выйти из аккаунта</IonLabel>
                </IonItem>
                <IonItem className='list'>
                    <IonLabel className='user-p'>Версия приложения 1.0</IonLabel>
                </IonItem>
            </IonList>
        </>
    );
}
export default Menu;