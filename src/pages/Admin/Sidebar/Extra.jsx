
// import React, { useRef } from 'react'
// import { useState } from 'react'


// const FormData = ({ formData,setFormData}) => {
//     const [data, setData] = useState({ book: "", by: "" })
//     const  inputRef =useRef(null)
//     function changerHandler(e) {
//         setData({ ...data, [e.target.name]: e.target.value })
//         console.log(data);
//     }
//     function submitHandler(e) {
//         e.preventDefault();
//         adder(data);
//         console.log(formData);
//         setData({book:"", by:""})
        
//     }
//     function adder(data) {
//         setFormData([...formData,data])
//     }
//     function inputHandler() {
//         inputRef.current.focus()
//     }
//     return (
//         <>
//             <h1>Heading</h1>
//             <form onSubmit={submitHandler}>
//                 <label onClick={inputHandler}>CLick to ref on books</label>
//                 <input type="text" name="book"  ref={ inputRef} value={data.book}  onChange={changerHandler}/>
//                 <input type="text" name="by" value={data.by} onChange={changerHandler} />
//                 <button>Submit</button>
//             </form>
//         </>
//     )
// }

// const Extra = () => {
//     const [formData,setFormData]=useState([])
//   return (
//       <div className="extra">
//           <FormData formData={formData} setFormData={setFormData} />
//           {formData.map((item) => (
//               <span>THe book is {item.book} , { item.by}</span>
//           ))
//           }
//       </div>
      
//   )
// }

// export default Extra

import React from 'react'

const Button = ({ children, backgroundColor }) => { 
    return <button style={{ backgroundColor }}>{ children}</button>
}
const Alert = ({ children }) => { 
    return (
        <>
            <div className="overlay">
                <div className="Alert">{ children}</div></div></>
    )
}
const DeleteButton = () => { 
    return <Button backgroundColor="red">button child</Button>
}
const ParentComponent = ({ children }) => {
    return (
      <div>
<h1>Parent Component</h1>
      <p>This is the parent component.</p>
        {children}
      </div>
    );
  };
  
  // Usage of ParentComponent with children
const Extra = () => {
  return (
      <div>
          <h1>hello</h1>
          <Alert>
              <h4>Delete Account</h4>
          </Alert>
          <p>are YOu sure?</p>
          <DeleteButton />
          <ParentComponent>
    <p>This is child content.</p>
    <button>Click me</button>
  </ParentComponent>
    </div>
  )
}

export default Extra