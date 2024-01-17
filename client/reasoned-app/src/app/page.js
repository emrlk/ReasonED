import { PrismaClient } from '../node_modules/prisma';

const prisma = new PrismaClient();

const Home = ({ leaderboardData }) => {
  return (
    <div>
      <h1>Example Home Page</h1>
      {/* content */}
      <p>This is your existing content.</p>

      {/* Leaderboard Ex*/}
      <h2>Example Game Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry) => (
          <li key={entry.id}>
            {entry.rank}. {entry.username}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function handler(req, res) {
  try {
    const leaderboardData = await prisma.leaderboard.findMany({
      orderBy: {
        score: 'desc',
      },
      take: 10,
      select: {
        id: true,
        username: true,
        score: true,
        rank: true,
      },
    });

    res.status(200).json(leaderboardData);
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default Home;