import firebase from '../init/Firebase';


export function fetchFeedback() {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection('feedback').get().then(()=>{
            resolve();
        }).catch((e)=>{
            reject(e);
        });
    });
}

export function addFeedback(feedbackObject) {
    let {email, feedback, createdAt} = feedbackObject;
    return new Promise((resolve, reject) => {
        firebase.firestore().collection('feedback').doc().set({
            email,
            feedback,
            createdAt
        }).then(()=>{
            resolve();
        }).catch((e)=>{
            reject(e);
        });
    });
}

export function addAnnouncement(announcement) {
    let {title, description, createdAt} = announcement;
    return new Promise((resolve, reject) => {
        firebase.firestore().collection('announcements').doc().set({
            title,
            description,
            createdAt
        }).then(()=>{
            resolve();
        }).catch((e)=>{
            reject(e);
        });
    });
}

export function deleteAnnouncement() {

}

export function fetchAnnouncements() {
    return new Promise((resolve, reject) => {
        firebase.firestore().collection('announcements').get().then((snapshot) => {
            let announcements = [];
            snapshot.forEach((doc) => {
                announcements.push(doc.data());
            });
            resolve(announcements);
        }).catch(e => {
            reject(e);
        });
    });
}