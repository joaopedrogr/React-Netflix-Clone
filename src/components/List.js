import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useNavigate } from "react-router-dom";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(param).then((res) => setList(res.data.results));
  }, [param]);

  const handleClick = (id) => {
    navigate(`/movie/${id}`); // Redireciona para a página de detalhes do filme
  };

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {list.map((item) => (
              <img
                key={item.id}
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                onClick={() => handleClick(item.id)} // Adiciona o evento de clique
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;