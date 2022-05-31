import CardPlan from "./CardPlan";
const CardBody = () => {
    return ( 
        <div className='card-container-body'>
                
                <h1 className='card-container-body-title' >Order Summary</h1>
                
                <p className='card-container-body-paragraph'>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </p>

                <CardPlan/>

                <button className='card-btn-payment'>Proceed to Payment</button>
                
                <button className='card-btn-cancel'>Cancel Order</button>

            </div>
     );
}
 
export default CardBody;