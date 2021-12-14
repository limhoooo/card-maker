// 사용자가 로그인 또는 로그아웃을 담당하는 클래스

import firebase from 'firebase';

export default class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}