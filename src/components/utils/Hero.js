import first from '../images/first.png';

const Hero = () => {
    return (
        <div className="hero">
            <div>
            <h1>Raising FrontLine  <br/>
             Billionaires .....</h1>
             <a>
                 <span><i class="fas fa-venus-mars"></i></span>
                 Get started
             </a>
            </div>

             <img src={first} alt=""/>
        </div>
    )
}

export default Hero
