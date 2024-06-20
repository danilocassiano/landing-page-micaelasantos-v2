import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss'
import { useState } from 'react';
import clsx from 'clsx';
import cerebro from './assets/clinica.png'
import juridico from './assets/juridica.png'

const Infos = () => {

    const [psicoterapiaAtivo, setPsicoterapiaAtivo] = useState(true)

    const trocaParaPsicoterapia = () => {
        setPsicoterapiaAtivo(true)
    }

    const trocaParaForense = () => {
        setPsicoterapiaAtivo(false)
    }

    return (
        <>
            <section id='infos' className={styles.s_infos}>
                <Container>
                    <div className={styles.s_infos__content}>
                        <nav data-aos="fade-out" data-aos-duration="1000" data-aos-delay="50" className={styles.tabs}>
                            <button onClick={trocaParaPsicoterapia} className={clsx(styles.tabs__button, `${psicoterapiaAtivo ? styles.tabs__buttonIsActive : ""}`)}>
                                Psicoterapia
                            </button>
                            <button onClick={trocaParaForense} className={clsx(styles.tabs__button, `${!psicoterapiaAtivo ? styles.tabs__buttonIsActive : ""}`, styles.tabs__button_forense)}>
                                Psicologia Juridica
                            </button>
                        </nav>
                        <Row id='psicoterapia' className={styles.list__psicoterapia} hidden={!psicoterapiaAtivo}>
                            <Col lg={6} className={styles.list__psicoterapia__img}>
                                <img className={styles.list__psicoterapia__img__foto} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" src={cerebro} alt="" />
                            </Col>
                            <Col data-aos="fade-in" data-aos-duration="1000" data-aos-delay="250" lg={6}>
                                <h2 className={styles.list__psicoterapia__title}>O QUE É A PSICOTERAPIA?</h2>
                                <br />
                                <p className={styles.list__psicoterapia__desc}>
                                    A psicoterapia é um processo terapêutico que envolve a interação entre um psicoterapeuta e um paciente, com o objetivo de promover mudanças positivas na saúde mental e emocional.
                                    Essa abordagem busca compreender os pensamentos, sentimentos e comportamentos do indivíduo, a fim de ajudá-lo a enfrentar desafios, superar dificuldades e alcançar um maior bem-estar psicológico.
                                    <br />
                                    <br />
                                    Durante as sessões de psicoterapia, o paciente tem a oportunidade de falar sobre suas preocupações, angústias e experiências de vida, enquanto o terapeuta o escuta ativamente e oferece suporte e orientação.
                                    O terapeuta pode utilizar diferentes abordagens terapêuticas, como a terapia cognitivo-comportamental, a psicanálise, a terapia humanista, entre outras, adaptando-se às necessidades individuais de cada paciente.
                                </p>
                            </Col>
                        </Row>
                        <Row id='forense' className={styles.list__psicoterapia} hidden={psicoterapiaAtivo}>
                            <Col lg={6}>
                                <h2 className={clsx(styles.list__psicoterapia__title, styles.list__psicoterapia__title__forense)}>O QUE É A PSICOLOGIA JURIDICA?</h2>
                                <br />
                                <p className={clsx(styles.list__psicoterapia__desc, styles.list__psicoterapia__desc__forense)}>
                                    A Psicologia Jurídica é um ramo especializado que une os campos da psicologia e do direito, focando na compreensão e análise do comportamento humano dentro do sistema judicial. Este campo abrange uma ampla gama de áreas, incluindo avaliação psicológica de indivíduos envolvidos em processos legais, como testemunhas, vítimas e réus. Além disso, a Psicologia Jurídica também se dedica à avaliação de capacidades mentais, como competência para julgamento e responsabilidade penal, fornecendo insights críticos que auxiliam juízes e advogados na tomada de decisões informadas. Ao integrar princípios psicológicos ao contexto jurídico, essa disciplina contribui significativamente para a busca por justiça e para a proteção dos direitos individuais na sociedade contemporânea.
                                </p>
                            </Col>
                            <Col lg={6} className={clsx(styles.list__psicoterapia__img, styles.list__psicoterapia__img__forense)}>
                                <img className={styles.list__psicoterapia__img__forense__img} src={juridico} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default Infos