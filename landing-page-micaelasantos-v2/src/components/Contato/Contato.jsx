import { Container, Row, Col } from "react-bootstrap"
import styles from './index.module.scss'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import clsx from 'clsx';

const Contato = () => {
    return (
        <section id="contato" className={clsx(styles.s_contato, 'text-center')}>
            <Container>
                <h1 data-aos="slide-right" data-aos-duration="2000" className={styles.titulo}>Agende a sua sessão</h1>
                <h4 data-aos="slide-right" data-aos-duration="1500" className={styles.desc}>Atendimento em todo o território nacional e a brasileiros que residem no exterior</h4>
                <Row data-aos="slide-right" data-aos-duration="1500" className={clsx("pe-5 ps-5 pb-5")}>
                    <Col sm={4} className={styles.col}>
                        <AiOutlineMail className={styles.icon} size={50} color="white" /> <a href="mailto:micaelaeloyse22@gmail.com.br" className={styles.item}>micaelaeloyse22@gmail.com.br</a>
                    </Col>
                    <Col sm={4} className={styles.col}>
                        <AiOutlineInstagram className={styles.icon} size={50} color="white" /> <a href="https://www.instagram.com/micaelasantos.psi/" className={styles.item}>@micaelasantos.psi</a>
                    </Col>
                    <Col sm={4} className={styles.col}>
                        <AiOutlineWhatsApp className={styles.icon} size={50} color="white" /> <a href="https://wa.link/fy7tjl" className={styles.item}>(81) 99655-1624</a>
                    </Col>
                </Row>
                <button data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1000" className={styles.e_button}>
                    <a href="https://wa.link/fy7tjl" className={styles.e_Btext}>WHATSAPP</a>
                </button>
            </Container>
        </section>
    )
}

export default Contato