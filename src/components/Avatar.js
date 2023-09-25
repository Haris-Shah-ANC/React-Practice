import { getImageurl } from "./utils";
import { getImageUrl2 } from "./utils";

// export function Avatar(props){
//     return(
//         <img
//         src= {getImageurl(props.person)}
//         alt = {props.name}
//         width={props.size}
//         height={props.size}
//         />
//     );
// }

////



export default function Gallery() {

  
  return (
    
    <div>
    <h1>Notable Scientists</h1>

      <Profile
            imageId="szV5sdG"
            name="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            discovery="polonium (chemical element)"
            awards={[
              'Nobel Prize in Physics',
              'Nobel Prize in Chemistry',
              'Davy Medal',
              'Matteucci Medal'
            ]}
      />
      <Profile
           imageId='YfeOqp2'
           name='Katsuko Saruhashi'
           profession='geochemist'
           discovery="a method for measuring carbon dioxide in seawater"
           awards={[
             'Miyake Prize for geochemistry',
             'Tanaka Prize'
           ]}
      />
      
    </div>
  );
}


function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}){
    return (
    <div>
      <section className="profile">

        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl2(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.lenght} </b> 
            ({ awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>

    </div>
    )
}

////////////////////////////////////////


function Image({ person, size }) {
  let thumbnailSize = 's' ;
  if (size > 90 ) {
    thumbnailSize = 'b'
  }
  return (
    <img
      className="avatar"
      src={getImageurl(person,thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Pic() {
  return (
    <>
    <Image
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    <Image
      size={70}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    <Image
      size={120}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    </>
  );
}