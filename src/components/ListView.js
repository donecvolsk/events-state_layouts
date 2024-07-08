//Компонент отображения товаров ввиде списка

export default function ListView(props) {
const { cards } = props;
  return (
    <div>
      {cards.map((item, idx) => 
        <div key={idx} className="shop-item">
          <div className="thumb">
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
          </div>
          <div className="title">{item.name}</div>
          <div className="desc">{item.caption}</div>
          <div className="price">$ {item.price}</div>
          <button className="btn">Add to cart</button>
        </div>
      )}
    </div>
  );
};
