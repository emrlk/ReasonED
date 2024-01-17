import { PrismaClient } from '@prisma/client';

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

export async function getServerSideProps() {
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

    return {
      props: {
        leaderboardData,
      },
    };
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return {
      props: {
        leaderboardData: [],
      },
    };
  }
}

export default Home;