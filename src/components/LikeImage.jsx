export default function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handleLikeImageCount}>Like Imagee {props.likeImageCounter}</button>
    </div>
  )
}