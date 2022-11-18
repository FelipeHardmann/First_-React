import './home.css'

import {Social} from '../../components/Social'

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

export default function Home(){
    return(
        <div className='home-container'>
            <h1>Felipe Hardmann</h1>
            <span>Veja meus links</span>

            <main className='links'>
                
                <section className='link-area'>
                    <a href='#'>
                        <p  className='link-text'>Instagram</p>
                    </a>
                </section>
                
                <section className='link-area'>
                    <a href='#'>
                        <p  className='link-text'>Instagram</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p  className='link-text'>Instagram</p>
                    </a>
                </section>



                <footer>
                    <Social url='https://facebook.com/sujeitoprogramador'>
                        <FaFacebook size={35} color='#fff'/>
                    </Social>

                    <Social url='https://youtube.com/sujeitoprogramador'>
                        <FaYoutube size={35} color='#fff'/>
                    </Social>

                    <Social url='https://instagram.com/sujeitoprogramador'>
                        <FaInstagram size={35} color='#fff'/>
                    </Social>

                </footer>

            </main>
        </div>
    )
}