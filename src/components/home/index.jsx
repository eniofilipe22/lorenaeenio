import './style.css'
import capa from "../../assets/capa.jpg"

const Home = () => {
    return (
        <div className='container'>
            <img className='capa' src={capa} alt="capa" />
            <div className='date'>
                <div className='line'></div>
                <span className='save'>SAVE THE DATE</span>
                <h1 className='nomes'>LORENA<br></br>E<br></br>ÊNIO</h1>
                <h2 className='data'>06/04/2024</h2>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Home