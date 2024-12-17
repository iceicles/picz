import { Form } from './Form';
import { ImageContainer } from './ImageContainer';

function App() {
  return (
    <>
      <h1 className='text-6xl p-8 mb-4'>PICZ 📸</h1>
      <div className='flex items-center justify-center min-h-[80vh] p-8'>
          <Form />
          <ImageContainer />
      </div>
    </>
  );
}

export default App;
