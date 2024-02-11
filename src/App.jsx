import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImageHoc/>
      </div>
    </div>
  );
}

export default App;