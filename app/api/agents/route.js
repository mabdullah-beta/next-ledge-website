import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { companyName, companyDetail } = await request.json();

    if (!companyName || !companyDetail) {
      return NextResponse.json(
        { error: 'Company name and detail are required' },
        { status: 400 }
      );
    }

    // Insert into Agent table
    const result = await query(
      `INSERT INTO Agent (company_name, company_details, created_at) 
       VALUES ($1, $2, NOW()) 
       RETURNING id`,
      [companyName, companyDetail]
    );

    return NextResponse.json({
      success: true,
      agentId: result.rows[0].id,
      message: 'Company details saved successfully'
    });

  } catch (error) {
    console.error('Error saving company details:', error);
    return NextResponse.json(
      { error: 'Failed to save company details' },
      { status: 500 }
    );
  }
}