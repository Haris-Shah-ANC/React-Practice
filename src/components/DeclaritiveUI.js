import { useState } from "react";

function SomeForm({status = 'empty'}) {
    if (status === 'success') {
      return <h1>That's right!</h1>
    }
    return (
      <>
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns 
          air into drinkable water?
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea disabled={
            status === 'submitting'
          } />
          <br />
          <button disabled={
            status === 'empty' ||
            status === 'submitting'
          }>
            Submit
          </button>
          {status === 'error' &&
            <p className="Error">
              Good guess but a wrong answer. Try again!
            </p>
          }
        </form>
        </>
    );
  }

  let statuses = ['empty','typing','submitting','success','error',] ;

export default function SomeApp(){
    return (
        <>
        {statuses.map(status => (
            <section key={status}>
                <h4>Form ({status})</h4>
                <SomeForm status={status}/>
            </section>
        ))}
        </>
    )
  }

///////////////// Questions

export function Picture() {
    const [isstyle,setIsStyle] = useState(false)

    let backgroundClassName = 'background'
    let pictureClassName = 'picture'
    if (isstyle){
        pictureClassName += 'picture--active'
    }else{
      backgroundClassName += 'background--active'
    }

    return (
      <div className={backgroundClassName}
      onClick={(e) => {
        e.stopPropagation() 
        setIsStyle(true)
      }}
      >
        <hr/> <br/>
        <img
          className={pictureClassName}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={(e) => {
            e.stopPropagation() 
            setIsStyle(true)
          }}
        />
      </div>
    );
  }
  



