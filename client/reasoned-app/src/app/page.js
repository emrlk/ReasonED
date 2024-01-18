const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const Home = ({ leaderboardData }) => {
  return (
    <div>
      <h1>Example Home Page</h1>
      <p>content</p>
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