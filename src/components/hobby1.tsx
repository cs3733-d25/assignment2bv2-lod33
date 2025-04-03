import Review from "./review.tsx";
import Table1 from "./table1.tsx";
import List1 from "./list1.tsx";
const Hobby1 = () => {
    return (
        <div>
            <h2>Intern and student by day, bartender by night. </h2>
            <p>While I have other hobbies, the majority of my free time is spent picking up extra shifts back home bartending. I've been fortunate enough to have the opportunity to learn before turning 21 -- yes that is legal -- allowing me to make some extra money on the side, treat family and friends, and meet all sorts of characters.</p>
            <img id={"Drink"} src={"./Drink image.jpg"} alt={"AI Mixer Image"} width={"450"} height={"450"}/>
            <div className="inline-group">
                <List1></List1>
                <Table1></Table1>
            </div>
            <Review></Review>
        </div>
    )
}
    export default Hobby1