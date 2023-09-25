function Recipe({drinkers}){

    return(
        <div>
            <ol>
                <li>boil {drinkers} cups of water</li>
                <li>Add {drinkers} spoon of tea and {0.5 * drinkers} spoons of spice </li>
                <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste </li>
            </ol>
        </div>
    )


}
export default function Main(){

    return (
        <div>
            <h1>For Two</h1>
        <Recipe
            drinkers={2}
        />
        <h1>For gathering</h1>
        <Recipe
            drinkers={4}
        />
        </div>
    )

}