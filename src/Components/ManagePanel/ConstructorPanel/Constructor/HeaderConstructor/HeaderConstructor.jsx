import React, {useState} from 'react';
import s from './HeaderConstructor.module.css';
import Select from "../../../../../UI Components/Select/Select"
import '@coreui/coreui/dist/css/coreui.min.css'
import {CCloseButton} from '@coreui/react'
import Multiselect from "../../../../../UI Components/Multiselect/Multiselect";
import axios from "axios";

/*
const HeaderConstructor = () => {
/!*    const gydroposts = [
        {label: "р. Ай (Метели)", value: "р. Ай (Метели)"},
        {label: "р. Ашкадар (Новофедоровка)", value: "р. Ашкадар (Новофедоровка)"},
        {label: "р. Белая (Андреевка)", value: "р. Белая (Андреевка)"},
        {label: "р. Белая (Арский Камень)", value: "р. Белая (Арский Камень)"},
        {label: "р. Белая (Бирск)", value: "р. Белая (Бирск)"},
        {label: "р. Белая (Ишимбай)", value: "р. Белая (Ишимбай)"},
        {label: "р. Белая (Кушнаренково)", value: "р. Белая (Кушнаренково)"},
        {label: "р. Белая (Охлебинино)", value: "р. Белая (Охлебинино)"},
        {label: "р. Белая (Старосубхангулово)", value: "р. Белая (Старосубхангулово)"},
        {label: "р. Белая (Сыртланово)", value: "р. Белая (Сыртланово)"},
        {label: "р. Белая (Уфа)", value: "р. Белая (Уфа)"},
        {label: "р. Белая (ж-д станция Шушпа)", value: "123"},
        {label: "р. Большой Ик (Мраково)", value: "р. Большой Ик (Мраково)"},
        {label: "р. Быстрый Танып (Алтаево)", value: "р. Быстрый Танып (Алтаево)"},
        {label: "р. Инзер (Азово)", value: "р. Инзер (Азово)"},
        {label: "р. Лемеза (Нижние Лемезы)", value: "р. Лемеза (Нижние Лемезы)"},
        {label: "р. Нугуш (Андреевский)", value: "р. Нугуш (Андреевский)"},
        {label: "р. Нугуш (Новосеитово)", value: "р. Нугуш (Новосеитово)"},
        {label: "р. Сарс (Султанбеково)", value: "р. Сарс (Султанбеково)"},
        {label: "р. Стерля (Отрадовка)", value: "р. Стерля (Отрадовка)"},
        {label: "р. Тюй (Гумбино)", value: "р. Тюй (Гумбино)"},
        {label: "р. Уршак (Ляхово)", value: "р. Уршак (Ляхово)"},
        {label: "р. Усень (Туймазы)", value: "р. Усень (Туймазы)"},
        {label: "р. Уфа (Верхний Суян)", value: "р. Уфа (Верхний Суян)"},
        {label: "р. Уфа (Караидель)", value: "р. Уфа (Караидель)"},
        {label: "р. Уфа (Красная горка)", value: "р. Уфа (Красная горка)"},
        {label: "р. Уфа (Муллакаево)", value: "р. Уфа (Муллакаево)"},
        {label: "р. Уфа (Уровень верхнего бьефа Павловка)", value: "р. Уфа (Уровень верхнего бьефа Павловка)"},
        {label: "р. Уфа (Уровень нижнего бьефа Павловка)", value: "р. Уфа (Уровень нижнего бьефа Павловка)"},
        {label: "р. Уфа (Шакша)", value: "р. Уфа (Шакша)"},
        {label: "р. Чермасан (Новоюмраново)", value: "р. Чермасан (Новоюмраново)"},
        {label: "р. Юрюзань (Атняш)", value: "р. Юрюзань (Атняш)"},
        {label: "р. Юрюзань (Чулпан)", value: "р. Юрюзань (Чулпан)"},
    ];*!/

    const [post, setPost] = useState("");

    const getPosts = () => {
        axios.get("https://floodrb.ugatu.su/api/posts.get?offset=0&count=20")
            .then((response) => JSON.stringify(response))
            .then((data) => {
                setPost(data.response);
            });
    };

    return (
        <div className={s.headerBlock}>
            <div className={s.headElemenents}>
                <h3 className={s.head}>
                    Конструктор отчетов
                </h3>
                <CCloseButton className={s.closeButton}/>
            </div>
            <div className={s.headTwo}>
                Вы можете выбрать те гидропосты, статистика по которым должна быть включена в отчет
            </div>
            <div className={s.multiSelect}>
                <button onClick={getPosts}>Get Posts</button>
                {/!*<Multiselect/>*!/}
                {post.response.name}
            </div>
            <label className={s.zeroPosts}>
                Посты не выбраны
            </label>
        </div>
    );
}

export default HeaderConstructor;
*/

class HeaderConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://floodrb.ugatu.su/api/posts.get')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                }
            )
    }

    render() {
        const gydroposts = [
            {label: "р. Ай (Метели)", value: "р. Ай (Метели)"},
            {label: "р. Ашкадар (Новофедоровка)", value: "р. Ашкадар (Новофедоровка)"},
            {label: "р. Белая (Андреевка)", value: "р. Белая (Андреевка)"},
            {label: "р. Белая (Арский Камень)", value: "р. Белая (Арский Камень)"},
            {label: "р. Белая (Бирск)", value: "р. Белая (Бирск)"},
            {label: "р. Белая (Ишимбай)", value: "р. Белая (Ишимбай)"},
            {label: "р. Белая (Кушнаренково)", value: "р. Белая (Кушнаренково)"},
            {label: "р. Белая (Охлебинино)", value: "р. Белая (Охлебинино)"},
            {label: "р. Белая (Старосубхангулово)", value: "р. Белая (Старосубхангулово)"},
            {label: "р. Белая (Сыртланово)", value: "р. Белая (Сыртланово)"},
            {label: "р. Белая (Уфа)", value: "р. Белая (Уфа)"},
            {label: "р. Белая (ж-д станция Шушпа)", value: "123"},
            {label: "р. Большой Ик (Мраково)", value: "р. Большой Ик (Мраково)"},
            {label: "р. Быстрый Танып (Алтаево)", value: "р. Быстрый Танып (Алтаево)"},
            {label: "р. Инзер (Азово)", value: "р. Инзер (Азово)"},
            {label: "р. Лемеза (Нижние Лемезы)", value: "р. Лемеза (Нижние Лемезы)"},
            {label: "р. Нугуш (Андреевский)", value: "р. Нугуш (Андреевский)"},
            {label: "р. Нугуш (Новосеитово)", value: "р. Нугуш (Новосеитово)"},
            {label: "р. Сарс (Султанбеково)", value: "р. Сарс (Султанбеково)"},
            {label: "р. Стерля (Отрадовка)", value: "р. Стерля (Отрадовка)"},
            {label: "р. Тюй (Гумбино)", value: "р. Тюй (Гумбино)"},
            {label: "р. Уршак (Ляхово)", value: "р. Уршак (Ляхово)"},
            {label: "р. Усень (Туймазы)", value: "р. Усень (Туймазы)"},
            {label: "р. Уфа (Верхний Суян)", value: "р. Уфа (Верхний Суян)"},
            {label: "р. Уфа (Караидель)", value: "р. Уфа (Караидель)"},
            {label: "р. Уфа (Красная горка)", value: "р. Уфа (Красная горка)"},
            {label: "р. Уфа (Муллакаево)", value: "р. Уфа (Муллакаево)"},
            {label: "р. Уфа (Уровень верхнего бьефа Павловка)", value: "р. Уфа (Уровень верхнего бьефа Павловка)"},
            {label: "р. Уфа (Уровень нижнего бьефа Павловка)", value: "р. Уфа (Уровень нижнего бьефа Павловка)"},
            {label: "р. Уфа (Шакша)", value: "р. Уфа (Шакша)"},
            {label: "р. Чермасан (Новоюмраново)", value: "р. Чермасан (Новоюмраново)"},
            {label: "р. Юрюзань (Атняш)", value: "р. Юрюзань (Атняш)"},
            {label: "р. Юрюзань (Чулпан)", value: "р. Юрюзань (Чулпан)"},
        ];

        const {isLoaded, posts} = this.state;

        if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <div className={s.headerBlock}>
                    <div className={s.headElemenents}>
                        <h3 className={s.head}>
                            Конструктор отчетов
                        </h3>
                        <CCloseButton className={s.closeButton}/>
                    </div>
                    <div className={s.headTwo}>
                        Вы можете выбрать те гидропосты, статистика по которым должна быть включена в отчет
                    </div>

                    <div className={s.multiSelect}>
                        <Multiselect list={gydroposts}/>
                        {/*<Multiselect list={posts.response.map(post =>post.name)}/>*/}
                    </div>

                    {/*<p>{posts.response.map(post => <div key={post.id}> {post.name}</div>)}</p>*/}
                </div>
            );
        }
    }
}

export default HeaderConstructor;
