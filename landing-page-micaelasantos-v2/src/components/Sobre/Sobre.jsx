import styles from './index.module.scss';
import foto from './assets/sobre.png';
import clsx from 'clsx';
import { Row, Col, Container } from 'react-bootstrap';

const Sobre = () => {
    return (
        <section id='sobre' className={clsx(styles.s_sobre)}>
            <Container>
                <h2 data-aos="slide-down" data-aos-duration="1000" className={clsx(styles.titulo, 'text-center pt-4')}>Micaela Santos</h2>
                <h4 data-aos="slide-down" data-aos-duration="1000" data-aos-delay="200" className={clsx(styles.subtitulo, 'text-center')}>CRP 02/27486</h4>
                <Row className='my-auto'>
                    <Col data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" lg={7}>
                        <p className={styles.desc}>
                            Micaela Santos é psicóloga clínica Psicanalítica. Com vasta experiência na área, atuo tanto em atendimento clínico presencial quanto online, oferecendo suporte emocional e terapia para adultos, adolescentes e crianças.
                            <br />
                            <br />
                            Tem uma abordagem sensível e empática, priorizando a escuta atenta e o acolhimento de cada pessoa que busca minha ajuda. Acredito profundamente na importância do processo terapêutico como uma jornada de autoconhecimento e transformação, onde é possível explorar pensamentos, sentimentos e experiências, compreendendo as raízes dos conflitos e buscando soluções que promovam um bem-estar emocional duradouro.
                            <br />
                            <br />
                            Minha especialização em Parentalidade e Psicanálise com Criança me permite oferecer um suporte ainda mais direcionado às necessidades das famílias, ajudando pais e filhos a construírem relacionamentos saudáveis e compreensivos.
                            <br />
                            <br />
                            Se você está enfrentando desafios emocionais, buscando compreender melhor a si mesmo ou lidar com questões específicas, estou aqui para ajudar. Entre em contato e vamos juntos iniciar essa jornada rumo ao seu equilíbrio emocional e desenvolvimento pessoal.
                        </p>
                    </Col>                    
                    <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="350" lg={5}>
                        <img className={clsx(styles.image)} src={foto} alt="Foto sobre" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sobre;