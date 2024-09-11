const Card = ({ cards, onClick }) => {
    return (
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.isPro ? 'pro-card' : ''}`} onClick={() => onClick(index)}>
            <img src={card.imgUrl} alt={`Card ${index}`} className="card-image" />
            {card.isPro && <span className="pro-badge">Pro</span>}
          </div>
        ))}
      </div>
    );
  };
  
  export default Card;
  

// Sample card data for each section
export const blocksCards = [
  { imgUrl: 'https://i.ibb.co.com/Tgc89Fq/FB-IMG-1624904018722.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/Tgc89Fq/FB-IMG-1624904018722.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/Tgc89Fq/FB-IMG-1624904018722.jpg', isPro: false },
];

export const pagesCards = [
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
];

export const templatesCards = [
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/Tgc89Fq/FB-IMG-1624904018722.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/SwK2ZHh/FB-IMG-1633610946387.jpg', isPro: false },
  { imgUrl: 'https://i.ibb.co.com/B46xJbC/FB-IMG-1633531965103.jpg', isPro: true },
  { imgUrl: 'https://i.ibb.co.com/4PCfpVt/FB-IMG-1624863412855.jpg', isPro: false },
];
