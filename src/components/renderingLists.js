import { getImageurl } from "./utils";

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];


export function List(){
    const listItems = people.map(person => 
    <li>{person + '  scientist'}</li>
    );

    return <ul>{listItems}</ul>
}

//filter 


export const people1 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];



export default function List1(){
    // const chemists = people1.filter(person => 
    //     person.profession === 'chemist'
    //     );

    const ListItem1 = people1.map(person => 
        <li key={person.id}>
            <img
            src = {getImageurl(person)} 
            alt = {person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' '+ person.profession+' '}
                known for {person.accomplishment}
            </p>
        </li>
        );

    return <ul>{ListItem1}</ul>
}   


export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

  
export function RecipeList(){
    return (
        <div>
        {recipes.map( recipe =>
            <Recipe
            {...recipe} key={recipe.id}
            />
            )}
        </div>
    )
}

function Recipe({name,id,ingredients}){
    return (
        <div>
        <h1>Recipes</h1>
            <div key={id}>
                <h2>{name}</h2>
                <ul>
                    {ingredients.map( ingredient =>
                    <li>{ingredient}</li>
                        )}
                </ul>
            </div>
                
        </div>
    )
}


const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
export function Poem() {
    return (
      <article>
        {poem.lines.map((line,i) => 
        <div key={i}>
            {i>0 && <hr/>}
            <p>{line}</p>
            {/* <h1>Hello</h1> */}
        </div>
            )}
      </article>
    );
  }