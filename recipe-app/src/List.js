import './List.css';

function List(props) {
    
    const deleteItem = key => {
        const newList = props.itemList.filter(i => {
            return i.key !== key;
        });
        props.updateItemList(newList);
    }

    return(

      <div>
            {props.itemList.map(i => {
                return(
                    <div className='todo'>
                        <p className='text'>{i.item}</p>
                        <button onClick={() => deleteItem(i.key)}>-</button>
                    </div>
                )
            })}
      </div>  
    );
}

export default List;