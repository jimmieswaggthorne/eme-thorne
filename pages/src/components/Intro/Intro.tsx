import { EmeSignature } from '../../../../public/assets/svgs/eme-signature'
import styles from './Intro.module.scss'
import comingHome from '/assets/images/coming-home.png'

const Intro = () => (
    <div className={styles.body}>
        <div className='intro'>
            <EmeSignature />
        </div>
        <div className='coming-home'>
            <img src='/assets/images/coming-home.png' alt="Coming Home Artwork" />
        </div>
        <div className='masking'>
            <img className="bg-white h-100" src='/assets/images/masking.png' alt="Masking Artwork" />
        </div>
    </div>
)
export default Intro