import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={100}
          messages={200}
          shares={300}
          username={'jotah_ivo'}
          description={'Gatinho malvado'}
          music={'Never let me down'}
          url={'https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a'}
        />
        <Video 
          likes={200}
          messages={300}
          shares={400}
          username={'paulaTejano'}
          description={'Meu gato maromba'}
          music={'Essa novinha é terrorista'}
          url={'https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4'}
        />
        <Video 
          likes={300}
          messages={400}
          shares={500}
          username={'paulin pinho'}
          description={'Oia o gato jiraya'}
          music={'Sem música'}
          url={'https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a'}
        />
      </div>
    </div>
  );
}

export default App;
