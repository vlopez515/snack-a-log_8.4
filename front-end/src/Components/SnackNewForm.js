import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SnackNewForm() {
 let navigate = useNavigate();
 const API = process.env.REACT_APP_API_URL;

 const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
   name: "", 
   fiber: 0, 
   protein: 0, 
   added_sugar: 0, 
   is_healthy: false, 
   image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label For="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label For="fiber">Fiber:</label>
        <input
          id="fiber"
          type="text"
          value={snack.fiber}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="protein">Protein:</label>
        <input
          id="protein"
          type="text"
          value={snack.protein}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="added_sugar">Added sugar:</label>
        <input
          id="added_sugar"
          type="text"
          value={snack.added_sugar}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="image">Image:</label>
        <input
          id="image"
          type="url"
          pattern="http[s]*://.+"
          value={snack.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
        <Link to={`/snacks/`}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default SnackNewForm;