const today = new Date() ;

function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-IN',
        { weekday : 'long' }
    ).format(date);
}

const person = {
    name : 'Haris Shah',
    theme : {
        backgroundColor : 'black',
        color : 'hotpink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
        <h1>To Do List for {formatDate(today)}</h1>
     
        <h1>{person.name}'s Tasks</h1>
        <ul>
            <li>Learn React</li>
            <li>Learn JS</li>
        </ul>
        </div>
    );
}

