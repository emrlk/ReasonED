import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
/* Example for adding data to table:
 Adds a new row to the database, with both the ownerName
 and petName fields taken from the query string in the URL when the
 route is visited.

Vercel sanitizes all queries sent to the Vercel Postgres database
 before executing them*/
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
 
  try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  //Returns the contents of the entire table
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}