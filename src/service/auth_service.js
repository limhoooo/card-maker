
import firebase from 'firebase';
import firebaseApp from './firebase';

// 사용자가 로그인 또는 로그아웃을 담당하는 클래스
export default class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    // 이미 로그인 했을시 onUserChanged 실행
    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
    // 로그아웃
    logout() {
        firebase.auth().signOut();
    }
}