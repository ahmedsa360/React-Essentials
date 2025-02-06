import { useState } from 'react';
import {CORE_CONCEPTS} from './Components/data-with-examples.js'
import  Header  from './Components/Header/Header.jsx'
import CoreConcept from './Components/CoreConcept.jsx'
import TapButton from './Components/TapButton.jsx';
import { EXAMPLES } from './Components/data-with-examples.js';


function App() {
  let [selectedTopic, setSelectedTopic] = useState()
  
  function handleClick(selected){
    setSelectedTopic(selected)
  }

  let tabContent = <p>please select a topic</p>
   
  if(selectedTopic){
    tabContent = <div id = "tab-content">
            
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
         {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div> 
  }


  return (
    <div>
      
      <Header/>
      
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h1>core consepts</h1>
          <ul>
            {CORE_CONCEPTS.map((conseptItem)=><CoreConcept key={conseptItem.title} {...conseptItem}/>)}
          </ul>
        </section>
        <section id = 'examples'>
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'} onSelect={()=>handleClick('components')}>components</TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleClick('jsx')}>Jsx</TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={()=>handleClick('props')}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'} onSelect={()=>handleClick('state')}>State</TapButton>
          </menu>

        {tabContent}

        </section>
       
      </main>
    </div>
  );
}

export default App;
