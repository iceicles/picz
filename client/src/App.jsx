import { useState, useEffect } from 'react';
import { Form } from './Form';
import { ImageContainer } from './ImageContainer';
import { API_URL } from './constants'; // todo: move to .env

function App() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');

  // fetch albums
  const fetchAlbums = async () => {
    const res = await fetch(API_URL + 'albums');
    const data = await res.json();
    setData(data.albums);
  };

  // gets all albums on component mount
  useEffect(() => {
    fetchAlbums();
  }, []);

  // form title controlled input
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // send image to server when uploaded
  const onImageChangeHandler = async (e) => {
    const imageFile = e.target.files[0];

    const formData = new FormData();
    // server requires image property from req.files (req.files.image)
    formData.append('image', imageFile);

    try {
      const res = await fetch(API_URL + 'albums/uploads', {
        method: 'POST',
        body: formData,
      });
      // if the response is not OK, throw an error with the server's response
      if (!res.ok) {
        const errorData = await res.json(); // get the error response
        throw new Error(JSON.stringify(errorData)); // throw the error as a stringified object
      }

      const {
        image: { src },
      } = await res.json();
      setImage(src); // image will have correct path returned by server
    } catch (error) {
      // parse the stringified error to access the original error properties
      const errorResponse = JSON.parse(error.message);
      console.log('Error in POST request - ', errorResponse.msg); // 'msg' from server
    }
  };

  // get image and title and send to server
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL + 'albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // server requires json format
        },
        body: JSON.stringify({
          image,
          title,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(JSON.stringify(errorData));
      }
      const data = await res.json();
      fetchAlbums(); // get all albums (including newly added image)
      setData([data.album]);
    } catch (error) {
      const errorResponse = JSON.parse(error.message);
      alert(errorResponse.msg);
    }
  };

  return (
    <>
      <h1 className='text-6xl p-8 mb-4'>PICz 📸</h1>
      <div className='flex flex-col items-center justify-center gap-[50px] min-h-[80vh] p-8 xl:flex-row'>
        <Form
          onSubmitHandler={onSubmitHandler}
          onImageChangeHandler={onImageChangeHandler}
          onTitleChangeHandler={onTitleChangeHandler}
          title={title}
        />
        <ImageContainer albumData={data} />
      </div>
    </>
  );
}

export default App;
