import Item from '../Item/Item';
import "../Item/item.css"

const ItemList = (props) =>{
    return(
        <div className="container__cart">
            {props.items.map ((item) =>(
                <Item 
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.title} 
                price={item.price}
                pictureUrl={item.pictureUrl} 
                />
            ))}
        </div>
    )
}

export default ItemList;
