import { createContext } from "react";
import { useContext } from "react";

const LevelContext = createContext(1) ;

export default function HeadingPage(){
    return(
    <Section>
            <Heading>Title</Heading>
        <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
                <Heading>Sub-heading</Heading>
                <Heading>Sub-heading</Heading>
                <Heading>Sub-heading</Heading>
                <Section>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                </Section>
            </Section>
        </Section>
    </Section>
    ) ;
}

function Section({children}){
    const level = useContext(LevelContext);

    return(
        <section className="section">
{/* This tells React: “if any component inside this <Section> asks for LevelContext, give them this level. */}
        <LevelContext.Provider value={level + 1}>
            {children}
        </LevelContext.Provider>
        </section>
    )
}

function Heading({children}){
    const level = useContext(LevelContext);

    switch(level){
        case 1 :
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            throw Error('Unknown level: '+ level) ;
    }
}

////////////////////////

export const LevelContext1 = createContext(0);

export function ProfilePage(){
    
    return (
        <Section1>
            <Heading1>My Profile</Heading1>
            <Post 
            title='Hello Traveller'
            body = 'Read About my adventures' />
            <AllPosts/>
        </Section1>
    )
}

function AllPosts(){
    return(
        <Section1>
            <Heading1>Post</Heading1>
            <RecentPosts/>
        </Section1>
    )
}

function RecentPosts(){
    return(
        <Section1>
            <Heading>Recent Posts</Heading>
            <Post
            title="Flavors of Lisbon"
            body="...those pastéis de nata!" />
            <Post
            title="Buenos Aires in the rhythm of tango"
            body="I loved it!"           
            />
        </Section1>
    )
}

function Post({title,body}){
    return(
        <Section1 isFancy={true}>
            <Heading1>
                {title}
            </Heading1>
            <p><i>{body}</i></p>
        </Section1>
    )
}

function Section1({children,isFancy}){

    const level = useContext(LevelContext1) ;

    return(
        <section className={'section ' + (isFancy ? 'fancy' : '')}>
            <LevelContext1.Provider value={level + 1}>
                {children}
            </LevelContext1.Provider>
        </section>
    );
}

function Heading1({children}){

    const level = useContext(LevelContext1) ;

    switch(level){
        case 0:
            throw Error('Heading must be inside a Section!');
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }

}

