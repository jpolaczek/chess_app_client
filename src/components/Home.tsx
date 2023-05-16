import ListMyGames from "./games/ListMyGames";

const Home = ({ loggedIn, userId }: { loggedIn: boolean, userId: number }) => {
    return (
        <div>
            <h1>Homepage of this amazing app!</h1>
            {loggedIn && ListMyGames()}
        </div>
    );
}

export default Home;
