import s from './Header.module.css';
import ButtonBackToMap from "../../../UI Components/ButtonBackToMap/ButtonBackToMap";

const Header = () => {
    return (
        <div>
            <div className={s.header}>
                Панель управления
            </div>
            <div className={s.backToMapButton}>
                <ButtonBackToMap text="Вернуться к карте"/>
            </div>
        </div>
    );
}

export default Header;