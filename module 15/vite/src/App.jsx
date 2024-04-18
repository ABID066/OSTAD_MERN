
import Head from './component/Head';
import Hero from './component/Hero';

function App() {
 
  const itemObj={
    name: "MD Abid",
    age: 24,
    city: "Khulna"
  }

  return (
    <div>
      <Head title="Learn React" des="jUST description"/>
      
      <Hero item={itemObj}/>

    </div>
  )
}

export default App
