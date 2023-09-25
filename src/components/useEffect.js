import { useEffect, useState } from "react";

// function VideoPlayer({isPlaying,src}){

//     const ref = useRef(null) ;

//     useEffect(() => {
//     if (isPlaying){
//         ref.current.play() ;
//     } else {
//         ref.current.pause();
//     }
//     }) ;

//     return (
//         <video ref={ref} src={src} loop playsInline />
//     )
// }

function Playground(){

    const [text,setText] = useState('a') ;

    useEffect(() => {
        function onTimeout(){
            console.log('⏰ ' + text)
        }
        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return() => {
            console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId) ;
        }
    })

    return (
        <>
        <label>
            What to log:{' '}
            <input
            className="border border-black"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </label>
        <h1>{text}</h1>
        </>
    )

}

export function EffectApp(){

    const [show,setShow] = useState(false) ;
    return (
        <>
        <hr/> <br />
        <button 
        className="border border-black rounded"
        onClick={() => setShow(!show)}
        >
            {show ? 'Unmount' : 'Mount'} the component
        </button>
        {show && <hr />}
        {show && <Playground />}
        </>
    )
   
}

