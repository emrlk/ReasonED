import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 

//API route that adds a PETS table in the database
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}