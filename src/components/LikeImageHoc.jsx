// import WrapperHoc from "./WrapperHoc"

// function LikeImageHoc(props)
//  {

//     return (
//       <div>
//         <button onClick={props.handleCounter}>Like Image {props.Counter}</button>
//       </div>
//     )
//   }
//   export default function WrapperHoc(LikeImageHoc);

import WrapperHoc from "./WrapperHoc"

function LikeImageHoc(props) {
  
    return (
      <div>
        <button onClick={props.handleCounter}>Like Image {props.counter}</button>
      </div>
    )
  }
  export default WrapperHoc(LikeImageHoc)