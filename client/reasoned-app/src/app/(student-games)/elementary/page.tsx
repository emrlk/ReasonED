import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

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
const elementaryGames = [
    {
        thumbnail: 'Manny-Logo.jpg',
        title: 'Straw Manny',
        description: "Straw Manny, a hopeful knight, practices combat on fake straw men, hindering his skill development; players must guide him to confront real opponents, teaching the concept of the 'straw man' fallacy.",
        link: '/elementary-game-1' // will display a page that embeds godot export 
    },
    {
        thumbnail: 'Manny-Logo.jpg',
        title: 'Hasty Harry',
        description: "Hasty Harry, an astronaut, hastily generalizes about new creatures and plants on planets, prompting players to gather accurate information and prevent his hasty conclusions, teaching the 'hasty generalization' fallacy in a top-view game",
        link: '/elementary-game-2' // will display a page that embeds godot export 
    },
];

// Function to display 4x4 game cards for elementary students
export default function ElementaryPage() {

    // TSX Structure
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen py-8">
                <h2 className="text-center text-4xl text-white font-bold mb-6">Elementary School Games</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {elementaryGames.map((game, index) => (
                        <GameCard
                            key={index}
                            thumbnail={game.thumbnail}
                            title={game.title}
                            description={game.description}
                            link={game.link}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}