import Title from "./components/title.tsx";
import Intro from "./components/intro.tsx";
import Hobby1 from "./components/hobby1.tsx";
import Hobby2 from "./components/hobby2.tsx";
import './App.css'

function App() {


  return (
      <>
        <Title/>
        <Intro name1={"Liam"} name2={"Camden"}>
        </Intro>
          <Hobby1></Hobby1>
          <Hobby2></Hobby2>
      </>
  )
}

export default App

//Testing