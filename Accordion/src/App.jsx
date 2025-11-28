import { AccordionComp } from "./components/AccordionComp"

const App=()=>{

  let items=[
    {
      title:"section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },

    {
      title:"section 2",
      content: "testing content for section 2"
    },

    {
      title:"section 3",
      content: "testing content for section 3"
    },

    {
      title:"section 4",
      content: "testing content for section 4"
    }

  ]

  return (
    <div>
      <AccordionComp items={items} />
    </div>
  )
}

export default App