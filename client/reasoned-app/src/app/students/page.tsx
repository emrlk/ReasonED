import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Link from "next/link";

export default function Students() {
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange-shades-400 min-h-screen mx-auto py-5 ">
                <div className=" mb-5 mx-60 px-10 py-10">
                    <h1 className="text-6xl text-white font-bold mb-10 ">
                        Students
                    </h1>

                    {/* Fallacy Characters */}
                    <div className="flex justify-center">
                        {/* Straw Manny */}
                        <div className="character-card" style={{ marginRight: '30px', textAlign: 'center' }}>
                            <img src="/MannyCharacterTransparentBG.png" width="160" height="180" style={{ display: 'block', margin: 'auto' }} />
                            <br />
                            <p className="text-white font-bold text-center">Straw Manny</p>
                            <p className="text-white text-center">
                                Straw Manny is a hopeful knight who needs better training. He only practices combat on fake straw men because they’re easier to hit.
                                As a result, he isn’t a very skilled fighter. Players need to help Manny build his combat skills by attacking real opponents rather than fake ones, teaching
                                the concept of the "straw man" fallacy.
                            </p>
                        </div>

                        {/* Hasty Harry */}
                        <div className="character-card" style={{ marginRight: '30px', textAlign: 'center' }}>
                            <img src="/HarryCharacterTransparentBG.png" width="160" height="180" style={{ display: 'block', margin: 'auto' }} />
                            <br />
                            <p className="text-white font-bold text-center">Hasty Harry</p>
                            <p className="text-white text-center">
                                Hasty Harry is an astronaut who makes flawed generalizations about the new creatures and plants he discovers on planets he visits. Players will
                                collect enough information about each planet and help Harry avoid making generalizations in his planet report, teaching the "hasty generalization" fallacy. This
                                will be a top-view game.
                            </p>
                        </div>

                        {/* Slippery Slope Sadie */}
                        <div className="character-card" style={{ marginRight: '30px', textAlign: 'center' }}>
                            <img src="/SadieCharacterTransparentBG.png" width="170" height="180" />
                            <br />
                            <p className="text-white font-bold text-center">Slippery Slope Sadie</p>
                            <p className="text-white text-center">
                                Slippery Slope Sadie is a snowboarder who tends to jump to extreme conclusions. In this game, players need to guide Sadie safely down a snowy path
                                without letting her slip into a pitfall, introducing the "slippery slope" fallacy. This will be a platformer game.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
