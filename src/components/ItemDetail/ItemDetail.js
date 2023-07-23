import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import crystal from "./assets/crystal.png";
const ItemDetail = ({
img,
id,
name,
price,
typeImg,
stock,
description,
basicAttack,
vitality,
defense,
fortune,
}) => {
return (
    <article className="ItemDetailCard">
    <picture>
        <img src={img} alt={name} width="160px" />
    </picture>
    <header>
        <h3>{name}</h3>
    </header>
    <section className="itemInfoContainer">
        < img src={typeImg} alt="typeImg" width="30px"/>
        <p>{basicAttack}</p>
        <p>{defense}</p>
        <p>{vitality}</p>
        <p>{fortune}</p>
        <p>Stock:{stock}</p>
    </section>
    <div>
    <img src={crystal} alt={crystal} width="15px" className="crystalIcon"/>
    {price}
    </div>
    <div className="ItemCountCointainer">
        < ItemCount initial={1} onAdd={(quantity) => console.log(quantity, 'added')}/>
    </div>
    </article>
);
};

export default ItemDetail;
