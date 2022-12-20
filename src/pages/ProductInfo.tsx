
import '../components/Main.css';
import {
    IonBackButton,
    IonButtons,
    IonHeader,
    IonContent,
    IonToolbar,
    IonIcon,
    IonList,
    IonButton,
    IonSlides,
    IonSlide
} from '@ionic/react';
import { heartOutline, shareSocialOutline, eyeOutline, callOutline } from 'ionicons/icons';

function ProductInfo() {
    const slideOpts = {
        initialSlide: 1,
        speed: 500
    };
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonButtons slot="end" className='like-'>
                        <IonIcon icon={heartOutline} size='large' />
                        
                            <IonIcon icon={shareSocialOutline} size='large' />
                       
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                {/* Title and price */}
                <h4>NIU UQI Red Электроскутер, 2020 </h4>
                <h3>3999₼ </h3>
                {/* Img side */}
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/motor.png' /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/moto.jpg' /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/image.png' /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/image.png' /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/image.png' /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto' src='assets/images/image.png' /></IonSlide>
                </IonSlides>
                {/* Upload infos */}
                <div className="info-moto">
                    <h5 className='info-upload'>Опубликовано 28 июля, г. Баку</h5>
                    <div className="view">
                        <IonIcon icon={eyeOutline} size='small' />
                        <h6 className='info-upload'>2378 (154 сегодня)</h6>
                    </div>
                </div>
                {/* Characteristics */}
                <h4>Характеристики</h4>
                <div className="details">
                    <IonList lines="none" className='ppds'>
                        <p className='name-infos'>Год выпуска</p>
                        <p className='name-infos'>Пробег</p>
                        <p className='name-infos'>Тип</p>
                        <p className='name-infos'>Цвет</p>
                        <p className='name-infos'>Двигатель</p>
                        <p className='name-infos'>Цилиндров</p>
                        <p className='name-infos'>Тактов</p>
                        <p className='name-infos'>КПП</p>
                        <p className='name-infos'>Привод</p>
                        <p className='name-infos'>Состояние</p>
                        <p className='name-infos'>Владельцы</p>
                        <p className='name-infos'>ПТС</p>
                        <p className='name-infos'>Таможня</p>
                        <p className='name-infos'>Обмен</p>
                        <p className='name-infos'>VIN</p>
                    </IonList>
                    <IonList>
                        <p>2021</p>
                        <p>6 810 rv</p>
                        <p>Электроскутер</p>
                        <p>Черный</p>
                        <p>650 см3 / 68 л.с. / Инжектор</p>
                        <p>2 / Рядное</p>
                        <p>4</p>
                        <p>6 передач</p>
                        <p>Цепь</p>
                        <p>Не требует ремонта</p>
                        <p>1</p>
                        <p>Оригинал / Электронный</p>
                        <p>Растоможен</p>
                        <p>Возможен</p>
                        <p>Год выпуска</p>
                    </IonList>
                </div>
                <h4>Комментарий продавца</h4>
                <p>Уважаемые клиенты, мотоциклом пользовался я сам, он в отличном состоянии. С этим прибором можно ездить на одном заряде по всему городу. Совету брать!</p>
                <p className='btn-second'>Пожаловаться на обьявление</p>
                <IonButton expand="block" className='btn-icon'><IonIcon icon={callOutline} size='large' />Позвонить</IonButton>
            </IonContent>
        </>
    );
}

export default ProductInfo;
