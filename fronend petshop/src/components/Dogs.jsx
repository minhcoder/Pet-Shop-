import DogCard from "./DogCard";

const DogsPage = (props) => {
  const { allDogs, isError } = props;

  return (
    <>
      {isError ? (
        <div>Failed getting data from server :( </div>
      ) : (
        <section className="dogs-container">
          {allDogs.map((dog) => {
            return (
              <div key={dog.id}>
                <DogCard
                  id={dog.id}
                  name={dog.name}
                  breed={dog.breed}
                  description={dog.description}
                  price={dog.price}
                  imageUrl={dog.imageUrl}
                />
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};
export default DogsPage;