import React from 'react';
import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonToggle,
    IonNavLink,
    IonPage
} from '@ionic/react';
import '../components/Main.css';
import { helpCircleOutline, helpBuoyOutline, moon, shieldOutline, documentTextOutline, chevronForwardOutline, notificationsOutline, languageOutline, personCircleOutline, lockClosedOutline, keyOutline } from 'ionicons/icons';
import PInformation from '../pages/PInformation';
import Notifications from '../pages/Notifications';
import Language from '../pages/Language';
import Password from '../pages/Password';

import Otp from '../pages/Otp';
import Singin from '../pages/Singin';
import Register from '../pages/Register';

function Profile() {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    return (
            <IonContent>
                <div className='bg-red'></div>
                <div className='user-main'>
                    <div className="user-info">
                        <h4 className='whh'>Мамед Мамедов</h4>
                        <h5 className='whh'>Просто хороший парень</h5>
                        <p className='user-badge'>проверенный</p>
                    </div>
                </div>
                <IonList inset={true}>
                    {/* Personal information */}
                    <IonNavLink routerDirection="forward" component={() => <PInformation />}>
                        <IonItem className='list'>
                            <IonIcon className='user-icon' icon={personCircleOutline} />
                            <IonLabel className='user-p'>Personal information</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
                    {/* Уведомления */}
                    <IonNavLink routerDirection="forward" component={() => <Notifications />}>
                        <IonItem className='list'>
                            <IonIcon className='user-icon' icon={notificationsOutline} />
                            <IonLabel className='user-p'>Уведомления</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
                    {/* Язык приложения */}
                    <IonNavLink routerDirection="forward" component={() => <Language />}>
                        <IonItem className='list'>
                            <IonIcon className='user-icon' icon={languageOutline} />
                            <IonLabel className='user-p'>Язык приложения</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
                    {/* Конфиденциальность */}

                    <IonItem className='list'>
                        <IonIcon className='user-icon' icon={lockClosedOutline} />
                        <IonLabel className='user-p'>Конфиденциальность</IonLabel>
                        <IonIcon className='user-icon' icon={chevronForwardOutline} />
                    </IonItem>

                    {/* Смена пароля */}
                    <IonNavLink routerDirection="forward" component={() => <Password />}>
                        <IonItem className='list'>
                            <IonIcon className='user-icon' icon={keyOutline} />
                            <IonLabel className='user-p'>Смена пароля</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
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
                {/* Components start */}
                <IonList inset={true}> Components
                    <IonNavLink routerDirection="forward" component={() => <Otp />}>
                        <IonItem className='list'>
                            <IonLabel className='user-p'>Подтвердить</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
                    <IonNavLink routerDirection="forward" component={() => <Singin />}>
                        <IonItem className='list'>
                            <IonLabel className='user-p'>Войти</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>
                    <IonNavLink routerDirection="forward" component={() => <Register />}>
                        <IonItem className='list'>
                            <IonLabel className='user-p'>Создать аккаунт</IonLabel>
                            <IonIcon className='user-icon' icon={chevronForwardOutline} />
                        </IonItem>
                    </IonNavLink>

                </IonList>
                {/* Components End */}
                <IonList inset={true}>
                    <IonItem className='list'>
                        <IonLabel className='user-p out'><h5>Выйти из аккаунта</h5></IonLabel>
                    </IonItem>
                    <IonItem className='list'>
                        <IonLabel className='user-p version'><h6>Версия приложения 1.0</h6></IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
    );
};

export default Profile;