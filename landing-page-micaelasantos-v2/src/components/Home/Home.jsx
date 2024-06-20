import styles from './index.module.scss'
import foto from './assets/Micaela.png'
import Container from 'react-bootstrap/Container';
import clsx from 'clsx';

function Home() {

    return (
        <>
            <section id='home' className={clsx(styles.s_hero, styles.row)}>
                <Container id='container'>
                    <div className={styles.quoteDiv}>
                        <p className={styles.quote}>&quot;Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.&quot; - Carl Jung</p>
                    </div>
                    <ul className={styles.ul}>
                        <li className={clsx(styles.li, styles.items)}>
                            <div className={clsx(styles.hero_texts)}>
                                <h1>Micaela Santos</h1>
                                <p className={styles.desc}>Promovendo o bem-estar emocional, cultivando o equilíbrio interior e guiando você rumo a uma vida plena e significativa.</p>
                            </div>
                            <div className={clsx(styles.hero_buttonsQuote)}>
                                <div className={styles.button}>
                                    <a href="#infos" className={clsx(styles.hero_buttonS, styles.button)}>Saiba mais</a>
                                    <a href="#contato" className={clsx(styles.hero_buttonC, styles.button)}>Contato</a>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles.li, styles.img)}>
                            <div className={clsx(styles.hero_imgContent)}>
                                <img src={foto} alt="Foto Micaela" />
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
}

export default Home