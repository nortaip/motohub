import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    IonSlide,
} from '@ionic/react';
import { heartOutline, shareSocialOutline, eyeOutline, pencilOutline } from 'ionicons/icons';

interface ProductInfoProps {
    id: number;
    // Add other prop types as needed
}

function ProductInfo(props: ProductInfoProps) {
    const { id } = props;
    const [productData, setProductData] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://senategroup.az/Data/api/Staff.php?id=${id}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const slideOpts = {
        initialSlide: 1,
        speed: 500,
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                {/* Display product username if available */}
                <h4>{productData.username} {productData.surename} {productData.dadname || ' '}</h4>
                <h3>{productData.userid}</h3>
                {/* Img side */}
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide className='product-img'><img alt='moto'
                        src={`https://senategroup.az/Data/api/Staff/3x4Staff/${productData.filePP}`} /></IonSlide>
                    <IonSlide className='product-img'><img alt='moto'
                        src={`https://senategroup.az/Data/api/Staff/scanStaff/${productData.fileSH}`} /></IonSlide>
                </IonSlides>
                {/* Upload infos */}
                <div className="info-moto">
                    <h5 className='info-upload'>{productData.date_post}</h5>
                    <div className="view">
                        {/* <IonIcon icon={eyeOutline} size='small' /> */}
                        {/* <h6 className='info-upload'>2378 (154 сегодня)</h6> */}
                    </div>
                </div>
                {/* Characteristics */}
                <h4>Məlumatları</h4>
                <div className="details">
                    <IonList lines="none" className='ppds'>
                        <p className='name-infos'>Adı <span>{productData.username || 'N/A'}</span></p>
                        <p className='name-infos'>Soy Adı <span>{productData.surename || 'N/A'}</span></p>
                        <p className='name-infos'>Ata Adı <span>{productData.dadname || 'N/A'}</span></p>
                        <p className='name-infos'>Vəzifəsi <span>{productData.vezife || 'N/A'}</span></p>
                        <p className='name-infos'>Departament <span>{productData.Departament || 'N/A'}</span></p>
                        <p className='name-infos'>Akkreditasiya <span>{productData.Catagory || 'N/A'}</span></p>
                        <p className='name-infos'>Fin <span>{productData.Fin || 'N/A'}</span></p>
                        <p className='name-infos'>Telefon <span>{productData.Phone || 'N/A'}</span></p>
                        <p className='name-infos'>Doğum tarixi <span>{productData.datebhrd || 'N/A'}</span></p>
                        <p className='name-infos'>Vətəndaşlığı <span>{productData.Country || 'N/A'}</span></p>
                        <p className='name-infos'>Təhsili <span>{productData.edu || 'N/A'}</span> </p>
                        <p className='name-infos'>Yaşayış ünvanı <span>{productData.lokationLive || 'N/A'}</span> </p>
                        <p className='name-infos'>Qeydiyyat ünvanı <span>{productData.lokatiogeyd || 'N/A'}</span></p>
                        <p className='name-infos'>İşə qəbul tarixi <span>{productData.outdate ? productData.outdate : 'N/A'}</span></p>
                        <p className='name-infos'>İşədən çıxma Səbəbi <span>{productData.outwhy ? productData.outwhy : 'N/A'}</span></p>
                    </IonList>
                </div>
                <p className='btn-second'>Qeydiyatdan çıxar</p>
                <IonButton expand="block" className='btn-icon'>Edit</IonButton>
            </IonContent>
        </>
    );
}

export default ProductInfo;
