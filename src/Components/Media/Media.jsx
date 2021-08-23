import media from "../../..//src/media1.jpg";
import { useState, useEffect } from "react";

const Media = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/media`);

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className=" container-fluid  ">
      <div className="mt-5 mb-2 right">
        <h2> Trending Now </h2>
      </div>

      <div className="row movies-comedy row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mx-n1 right">
        <div className=" col  px-1 ">
          <img
            src={media}
            className="mb-2  mb-md-2 mb-sm-0  px-md-2 img-fluid w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
