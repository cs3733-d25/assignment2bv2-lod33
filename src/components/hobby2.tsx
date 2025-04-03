import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Pref from "./pref.tsx";
const Hobby2 = () => {
    return (
        <div>
        <h2>Gamer and Robotics Engineer from Upstate NY</h2>
            <p>Evidently, my main hobby is playing video games. Of course, I do other things with my time, but if there is one thing
                that has stayed constant with me, it is my love of video games. Over the years, my taste in games have changed, but I am
                mainly a fan of resource management and cozy games</p>
            <img id={"Controller"} src={"./ControllerAi.jpg"} alt={"AI Controller Image"} width={"450"} height={"450"}/>
            <div className="inline-group">
            <List2></List2>
            <Table2></Table2>
        </div>
            <Pref></Pref>
        </div>
    )
}
export default Hobby2


