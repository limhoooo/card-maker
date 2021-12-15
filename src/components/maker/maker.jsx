import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useNavigate } from 'react-router'
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService, FileInput }) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'limho1',
            company: 'none',
            theme: 'dark',
            title: 'hello world',
            email: 'nex110@naver.com',
            message: 'hi my name is ho',
            fileName: 'hoho',
            fileURL: null,
        },
        '2': {
            id: '2',
            name: 'limho2',
            company: 'none',
            theme: 'light',
            title: 'hello world',
            email: 'nex110@naver.com',
            message: 'hi my name is ho',
            fileName: 'hoho',
            fileURL: null,
        },
        '3': {
            id: '3',
            name: 'limho3',
            company: 'none',
            theme: 'colorful',
            title: 'hello world',
            email: 'nex110@naver.com',
            message: 'hi my name is ho',
            fileName: 'hoho',
            fileURL: null,
        },
    });
    const history = useNavigate();
    const onLogout = () => {
        authService.logout();
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history('/')
            }
        })
    })

    const createOrupdateCard = (card) => {
        // 콜백으로도 사용가능
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} updateCard={createOrupdateCard} deleteCard={deleteCard} addCard={createOrupdateCard} cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;