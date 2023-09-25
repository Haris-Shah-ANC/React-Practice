function Button({children ,onClick}){
   
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({moviename}){
    function handlePlayClick(){
        alert(`Playing ${moviename}`)
    }
    return(
        <Button onClick={handlePlayClick}>
            Play "{moviename}"
        </Button>
    )
}


function UploadButton(){
    return (
        <Button onClick={() => alert('Uploading!' )}>
            Upload Image
        </Button>
    )
    
}
export default function Toolbar(){
    return (
        <div>
            <PlayButton moviename='ABCD'/>
            <UploadButton/>
        </div>
    )
}


// function StopPropogation({onClick, children}){
//     return(
//         <button onClick={(e) => {
//             e.stopPropagation(); onClick();
//         }}>
//             {children}
//         </button>
//     )

// }

// export function EventPropogation(){
//     return (
//         <div onClick={() => alert('You Click on the div')}>
//            <StopPropogation onClick={() => alert('Playing')}>
//             Play movie
//             </StopPropogation>     
//            <StopPropogation onClick={() => alert('uploading')}>
//                 Upload Image
//            </StopPropogation>
//         </div>
//     )

// }




