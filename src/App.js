// import Colors from "./Color";
// import lstProducts from "./store";
import { useState } from "react";
// import axios from 'axios';
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//   console.log(res)
// })

// fetch
// var postApi = 'https://jsonplaceholder.typicode.com/posts'
// fetch(postApi)

// .then(function(reponse){
//     return reponse.json();
// })
// .then(function(post){
//     console.log(post)
// })
// .catch(function(err){
//     console.log('Lỗi')
// })

// var errmess = "Không có dữ liệu";
// let newarr=[];
// newarr = lstProducts.slice(1,3)
// console.log(newarr)
// if (newarr.length > 0) {
//    return (
//       <div
//         className="App"
//         style={{ display: "flex", justifyContent: "space-around" }}
//       >
//         {newarr.length > 0 ? newarr.map(product => (
//           <div
//             key={product.ProductName}>
//             <p>Hãng: {product.BrandCode}</p>
//             <p>Danh mục: {product.CateProCode}</p>
//             <p>Tên code: {product.ProductCode}</p>
//             <p>Tên sản phẩm: {product.ProductName}</p>
//             <p>Giá: {product.Price}</p>
//             <Colors data={product.Colors} />
//           </div>)) : errmess }
//       </div>
//     );
// }



// const [counter,setCounter] = useState(1)

// const handelClick= () => {
//   setCounter(counter + 1)
// }
//   return(
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handelClick}>Click</button>
//     </div>
//   )



// const girfs = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keybroad',
// ]


//   const [girf,setGirf] = useState()
//   const randomGirf = () =>{
//     const index = Math.floor(Math.random() * girfs.length)
//     setGirf(girfs[index])
//   }
//   return(
// <div style={{padding:30}}>
//   <h1>{girf ||'Chưa có phần thưởng'}</h1>
//   <button onClick={randomGirf}>Lấy thưởng</button>
// </div>
//   )


// const[name,setName] = useState('')
// const[email,setEmail] = useState('')

// const handlSubmit = () => {
//   console.log({
//     name,
//     email,
//   }
//   )
// }

// return(
//   <div>
//     <input
//     value={name}
//     onChange = {e => setName (e.target.value) }
//     />
//    <input
//     value={email}
//     onChange = {e => setEmail (e.target.value) }
//     />
//   <button onClick={handlSubmit}>Click</button>
//   </div>
// )


const courses = [
  {
    id: 1,
    name: 'HTML, CSS',
  },
  {
    id: 2,
    name: 'Javascript',
  }, {
    id: 3,
    name: 'ReactJS',
  }
]

function App() {
  const [checked, setChecked] = useState([])
const handleCheck = (id) => {

}
  const handelSubmit = () => {
    console.log({id:checked})
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type='radio'
            checked={checked === course.id}
            onChange={()=> handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handelSubmit}> Click</button>
    </div>
  )
}


export default App;
