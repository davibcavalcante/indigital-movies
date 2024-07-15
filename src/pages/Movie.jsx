import { useParams } from "react-router-dom";

const Movie = () => {
    const { id } = useParams();

    return (
        <section>
            <h1>Filme {id}</h1>
        </section>
    );
};

export default Movie;