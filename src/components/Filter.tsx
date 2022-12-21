import React, { useState } from "react";
import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAlert,
    IonFooter,
    IonModal,
    IonSearchbar,
} from "@ionic/react";

export const SEARCH = [
    {
        id: "s1",
        title: "Business",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-business",
    },
    {
        id: "s2",
        title: "Computing",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-computing",
    },
    {
        id: "s3",
        title: "Connections",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-connections",
    },
    {
        id: "s4",
        title: "Construction",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-construction",
    },
    {
        id: "s5",
        title: "Engineering",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-engineering",
    },
    {
        id: "s6",
        title: "Graduate",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-graduate",
    },
    {
        id: "s7",
        title: "Marketing",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-marketing",
    },
    {
        id: "s8",
        title: "Medicine",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-medicine",
    },
    {
        id: "s9",
        title: "Science",
        detail:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        page: "/search-science",
    },
];

export const Search: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const [showAlert6, setShowAlert6] = useState(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar>

                    </IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        {SEARCH.map((search) => (
                            <IonCol
                                size="12"
                                size-xs="12"
                                size-sm="6"
                                size-md="4"
                                size-lg="4"
                                key={search.id}
                            >
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{search.title}</IonCardTitle>
                                        <IonCardSubtitle>Sector</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>{search.detail}</IonCardContent>
                                    <IonFooter className="ion-text-right">
                                        <IonButton
                                            color="secondary"
                                            fill="clear"
                                            routerLink={search.page}
                                        >
                                            View
                                        </IonButton>
                                    </IonFooter>
                                </IonCard>
                            </IonCol>
                        ))}
                        <IonCol className="ion-text-center">
                            <IonModal isOpen={showModal} className="my-custom-class">
                                <p>This is modal content</p>
                                <IonButton
                                    color="secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close Modal
                                </IonButton>
                            </IonModal>
                            <IonButton color="secondary" onClick={() => setShowModal(true)}>
                                Information
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonAlert
                        isOpen={showAlert6}
                        onDidDismiss={() => setShowAlert6(false)}
                        header={'Checkbox'}
                        inputs={[
                            {
                                name: 'checkbox1',
                                type: 'checkbox',
                                label: 'Checkbox 1',
                                value: 'value1',
                                checked: true
                            },
                            {
                                name: 'checkbox2',
                                type: 'checkbox',
                                label: 'Checkbox 2',
                                value: 'value2'
                            },
                            {
                                name: 'checkbox3',
                                type: 'checkbox',
                                label: 'Checkbox 3',
                                value: 'value3'
                            },
                            {
                                name: 'checkbox4',
                                type: 'checkbox',
                                label: 'Checkbox 4',
                                value: 'value4'
                            },
                            {
                                name: 'checkbox5',
                                type: 'checkbox',
                                label: 'Checkbox 5',
                                value: 'value5'
                            },
                            {
                                name: 'checkbox6',
                                type: 'checkbox',
                                label: 'Checkbox 6',
                                value: 'value6'
                            }
                        ]}
                        buttons={[
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: () => {
                                    console.log('Confirm Cancel');
                                }
                            },
                            {
                                text: 'Ok',
                                handler: () => {
                                    console.log('Confirm Ok');
                                }
                            }
                        ]}
                    />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Search;