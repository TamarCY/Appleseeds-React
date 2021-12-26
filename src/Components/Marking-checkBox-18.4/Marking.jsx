import React, { useState } from "react";





const Marking = () => {
    const array = [{ id: "1", value: "one", checked: false },
    { id: "2", value: "two", checked: false }, { id: "3", value: "one", checked: false },
    { id: "4", value: "four", checked: false }, { id: "5", value: "five", checked: false }];

    const [items, setItems] = useState(array)

    const renderList = () => {
        return items.map((element) => {
            return (
                <li key={element.id}>
                    <input type="checkbox"
                        id={element.id}
                        name={element.value}
                        onChange={(e) => (checkItem(e))} />
                    {element.value}
                </li>
            )
        })
    }

    const checkItem = (e) => {
        const arrayCopy = [...items];
        const item = arrayCopy.find((element) => (element.id === e.target.id))
        item.checked = !item.checked;
        setItems(arrayCopy)
    }





    const deleteItems = () => {
        const filtered = items.filter((item) => (!item.checked))
        console.log(filtered);
        setItems(filtered)
    }


    const resetItems = () => {
        setItems(array)
    }

    return (
        <div>
            <button onClick={() => (deleteItems())}>Delete</button>
            <button onClick={()=>(resetItems())}>Reset</button>
            <ul>{renderList()}</ul>
        </div>
    )
}

export default Marking