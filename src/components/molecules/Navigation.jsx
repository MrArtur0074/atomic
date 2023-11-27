import LinkPage from "../atoms/LinkPage.jsx";
import styles from "./Navigation.module.css"
function Navigation() {
    const urlsNavigation = [
        {
            text: 'Главная',
            url: '/'
        },
        {
            text: 'Каталог',
            url: '/catalog'
        },
        {
            text: 'Контакты',
            url: '/contacts'
        },
        {
            text: 'О нас',
            url: '/about'
        },
    ]

    const viewNavigation = urlsNavigation.map((item, index) => {
        return (
            <LinkPage key={index} data={item} />
        )
    })

    return (
        <ul className={styles.navigation}>
            {viewNavigation}
        </ul>
    )
}

export default Navigation