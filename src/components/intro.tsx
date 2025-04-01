interface IntroProps{
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2}) => {
    return (
        <p>My name is {name1}, I like Bartending. My name is {name2}, I like Videogames</p>
    )
}

export default Intro;

//Testing