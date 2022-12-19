import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,

} from '@ionic/react';
import { archive, heart, trash } from 'ionicons/icons';
import '../components/Main.css';

function PageTwo() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Уведомления</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonItemSliding>
                    <IonItemOptions side="start">
                        <IonItemOption color="success">
                            <IonIcon slot="bottom" icon={archive}></IonIcon>
                            Archive
                        </IonItemOption>
                    </IonItemOptions>

                    <IonItem>
                        <div className="notify-card">
                            <h4 className='whh'>Мамед Мамедов</h4>
                            <h5 className='whh'>Просто хороший парень</h5>
                            <p className='user-badge'>проверенный</p>
                        </div>
                    </IonItem>

                    <IonItemOptions>
                        <IonItemOption color="danger">
                            <IonIcon slot="bottom" icon={trash}></IonIcon>
                            Delete
                        </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
                <IonItemSliding>
                    <IonItemOptions side="start">
                        <IonItemOption color="success">
                            <IonIcon slot="bottom" icon={archive}></IonIcon>
                            Archive
                        </IonItemOption>
                    </IonItemOptions>

                    <IonItem>
                        <div className="notify-card">
                            <h4 className='whh'>Мамед Мамедов</h4>
                            <h5 className='whh'>Просто хороший парень</h5>
                            <p className='user-badge-red'>проверенный</p>
                        </div>
                    </IonItem>

                    <IonItemOptions>
                        <IonItemOption color="danger">
                            <IonIcon slot="bottom" icon={trash}></IonIcon>
                            Delete
                        </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
            </IonContent>
        </>
    );
}

export default PageTwo;