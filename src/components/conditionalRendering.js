function Item({name, isPacked}){
//Conditionally assigning JSX to a variable 

     let itemContent = name ;
    //  if (isPacked){
    //     itemContent = name +  " ✔";
    //  }
    // above if condition can also be used with JSX code

    if (isPacked){
        itemContent = (
            <del>
                {name +  " ✔"}
            </del>
        )
    }
   return (
    <li className="item">
        {itemContent}
    </li>

    // <li className="item">
    //     {isPacked ? (
    //         <del>
    //             {name + ' ✔'}
    //         </del>
    //     ) : (
    //         name
        
    //     )}
    // </li>

    //Using && operator

    // <li className="item">
    //     {name} {isPacked && '✔'}
    // </li>

   
   );

}

export default function PackingList(){
    return (
        <section>
            <h1>Packing List</h1>
            <ul>
                <Item
                isPacked={true}
                name= "Suit"
                />
                <Item
                isPacked={true}
                name= "Helmet"
                />
                <Item
                isPacked={false}
                name= "Photo"
                />
            </ul>
        </section>
    )
}

function Drink({name}){
    let part , caffeine, age ;
    if (name === 'tea'){
        part = 'leaf'
        caffeine = '15/20mg'
        age = '4000+'
    }else if (name === 'coffee'){
        part = 'bean'
        caffeine = '75/80mg'
        age = '1000+'
    }
    return (
        <section>
        <h1>{name}</h1>
        <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
        </dl>
        </section>
    )
}


export function DrinkList(){
    return (
        <div>
    <Drink
        name = 'tea'
    />
    <Drink
    name = 'coffee'
    />
    </div>
    )
}