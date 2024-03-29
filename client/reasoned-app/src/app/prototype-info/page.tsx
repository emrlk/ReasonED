import React from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function PrototypePage() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Page Body */}
      <div className="constainer bg-orange min-h-screen mx-auto py-8">
        <h2 className="text-4xl text-white font-bold mb-6">Prototype</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p className="text-white mb-4">
              The ReasonED prototype will consist of a visually appealing
              website with pages dedicated to games, readings, and educator
              resources respectively. Three two-dimensional games will be
              developed and embedded on the website, each in which a logical
              fallacy is personified as a fun character with some flawed
              tendency that corresponds to the fallacy. The games will be:
            </p>

            <ul className="text-white mb-4 list-disc ml-8">
              <li>
                <strong>Straw Manny:</strong> Straw Manny is a hopeful knight
                who needs better training. He only practices combat on fake
                straw men because they’re easier to hit. As a result, he isn’t a
                very skilled fighter. Players need to help Manny build his
                combat skills by attacking real opponents rather than fake ones,
                teaching the concept of the "straw man" fallacy.
              </li>
              <li>
                <strong>Hasty Harry:</strong> Harry is an astronaut who makes
                flawed generalizations about the new creatures and plants he
                discovers on planets he visits. Players will collect enough
                information about each planet and help Harry avoid making
                generalizations in his planet report, teaching the "hasty
                generalization" fallacy. This will be a top-view game.
              </li>
              <li>
                <strong>Slipery Slope Sadie:</strong> Sadie is a snowboarder who
                tends to jump to extreme conclusions. In this game, players need
                to guide Sadie safely down a snowy path without letting her slip
                into a pitfall, introducing the "slippery slope" fallacy. This
                will be a platformer game.
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <p className="text-white mb-4">
              While the concepts and scenarios are simplified for younger ages,
              these games aim to plant the seeds of critical thinking and
              encourage kids to recognize flawed reasoning. The fallacy
              characters serve as memorable guides in this educational journey.
              This website will provide educators with a tool to cultivate their
              student’s critical thinking skills over the long-term and beyond
              the scope of a single subject.
            </p>

            <p className="text-white mb-4">
              The games will be curated for three general age groups; the first
              group being grades 2 and 3, the second being all middle schoolers,
              and the third being all high schoolers. Curation will be achieved
              by adjusting the simplicity of the examples, reading levels,
              feedback, and by adjusting the penalties for wrong answers. Each
              game will follow a similar pattern of providing an age-appropriate
              explanation about the specific logical fallacy in focus, and
              feedback after each answer to help players understand why the
              character's thinking is incorrect, so that they can identify
              similar patterns in real-life scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
