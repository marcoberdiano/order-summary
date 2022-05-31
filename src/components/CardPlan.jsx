import { ReactComponent as Music } from '../images/icon-music.svg';
const CardPlan = () => {
    return ( 
        <div className='card-plan-container'>

                    <div className='card-plan-left'>
                        <div>
                            <Music/>
                        </div>
                        <div>
                            <h2 className='card-plan'>Annual Plan</h2>
                            <p className='card-plan-price'>$59.99/year</p>
                        </div>
                    </div>

                    <div className='card-plan-right'>
                        <a href='#' className='card-plan-change'>Change</a>
                    </div>

                </div>
     );
}
 
export default CardPlan;