import {
    IonRow,
    IonCol,
    IonCardHeader,
    IonSkeletonText,
} from '@ionic/react';

function CardLoading() {
    return (
        <>
            <IonRow className='card-group'>
                <IonCol class='card-Load' >
                    <div className="user-Sales-Load "><IonSkeletonText animated={true} ></IonSkeletonText></div>
                    <IonSkeletonText className='img-card-Load' animated={true} ></IonSkeletonText>
                    <IonCardHeader className='info-Load'>
                        <IonSkeletonText class='subtitle-Load' animated={true} ></IonSkeletonText>
                        <IonSkeletonText class='Title-Load' animated={true} ></IonSkeletonText>
                        <IonSkeletonText class='time-Load' animated={true} ></IonSkeletonText>
                    </IonCardHeader>
                </IonCol>
                <IonCol class='card-Load' >
                    <div className="user-Sales-Load "><IonSkeletonText animated={true} ></IonSkeletonText></div>
                    <IonSkeletonText className='img-card-Load' animated={true} ></IonSkeletonText>
                    <IonCardHeader className='info-Load'>
                        <IonSkeletonText class='subtitle-Load' animated={true} ></IonSkeletonText>
                        <IonSkeletonText class='Title-Load' animated={true} ></IonSkeletonText>
                        <IonSkeletonText class='time-Load' animated={true} ></IonSkeletonText>
                    </IonCardHeader>
                </IonCol>
            </IonRow>
        </>
    );
}
export default CardLoading;