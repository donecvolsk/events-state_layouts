//компонет отображения товаров ввиде карточек

export default function CardsView(props) {
    const { cards } = props;
    return (         
        <div className="product-contayner">
            {cards.map((item, idx) =>
            <div key={idx} className="shop-card">           
                <div className="title">{item.name}</div>
                <div className="desc">{item.caption}</div>
                <div className="slider">
                    <figure>
                        <img src={item.img} alt={item.title} />
                    </figure>
                </div>   
                <div className="cta">
                    <div className="price">$ {item.price}</div>
                    <button className="btn">Add to cart</button>
                </div>
            </div> 
            )}    
        </div>      
    ) 
}