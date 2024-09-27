import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/header';

// Game card component
const GameCard = ({ thumbnail, title, description, link }) => {
    return (
        <div className="game-card flex flex-col items-center justify-center mb-8">
            <a href={link} className="text-white text-center">
                <img src={thumbnail} alt={title} className="mb-4" />
                <h3 className="text-white font-bold">{title}</h3>
                <p className="text-white">{description}</p>
            </a>
        </div>
    );
};

// Constants for game data
const highschoolGames = [
    {
        thumbnail: 'MannyCharacterTransparentBG.png',
        title: 'Straw Manny',
        description: "Straw Manny, a hopeful knight, practices combat on fake straw men, hindering his skill development; players must guide him to confront real opponents, teaching the concept of the 'straw man' fallacy.",
        link: '/manny-game' // will display a page that embeds godot export 
    },
    {
        thumbnail: 'HarryCharacterTransparentBG.png',
        title: 'Hasty Harry',
        description: "Hasty Harry, an astronaut, hastily generalizes about new creatures and plants on planets, prompting players to gather accurate information and prevent his hasty conclusions, teaching the 'hasty generalization' fallacy in a top-view game",
        link: '/harry-game' // will display a page that embeds godot export 
    },
    {
        thumbnail: 'SadieCharacterTransparentBG.png',
        title: 'Slope Sadie',
        description: "Slope Sadie guides players through treacherous mountain slopes, prompting them to avoid hasty assumptions and navigate based on accurate evidence, teaching the 'slippery slope' fallacy in a thrilling adventure game.",
        link: '/sadie-game' // will display a page that embeds godot export 
    },
];

// Function to display 4x4 game cards for elementary students
export default function HighSchoolPage() {

    // TSX Structure
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen py-8">
                <h2 className="text-center text-4xl text-white font-bold mb-6">High School Level Games</h2>
                <div className="constainer d-flex justify-content-center">
                    <div className="row">
                        {highschoolGames.map((game, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="game-card text-center">
                                    <a href={game.link} className="text-white">
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img src={game.thumbnail} alt={game.title} className="mb-4" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                        </div>
                                        <h3 className="text-white font-bold">{game.title}</h3>
                                        <div className="description-container" style={{ maxWidth: '300px', margin: '0 auto' }}>
                                            <p className="text-white">{game.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
