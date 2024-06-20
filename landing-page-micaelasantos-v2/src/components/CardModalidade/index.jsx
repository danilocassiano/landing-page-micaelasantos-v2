import PropTypes from 'prop-types';
import styles from './index.module.scss';

const CardModalidade = ({ imagemSrc, texto, frase }) => {
    return (
        <div className={styles.card}>
            {imagemSrc && (
                <div className={styles['image-container']}>
                    <img src={imagemSrc} alt="Imagem" />

                    {frase && (
                        <span className={styles.frase}>
                            {frase}
                        </span>
                    )}
                </div>
            )}

            {texto && (
                <div className={styles.text}>
                    {texto}
                </div>
            )}
        </div>
    );
};

CardModalidade.propTypes = {
    imagemSrc: PropTypes.string.isRequired,
    texto: PropTypes.node,
    frase: PropTypes.string,
};

export default CardModalidade;
