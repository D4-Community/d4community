export async function GET() {
  try {
    const response = await fetch(
      'https://json.commudle.com/api/v2/events/public/index_by_community?when=future&community_id=455',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        // Add cache control
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Return the data in the expected format
    return Response.json({
      data: {
        values: data?.data?.values || [],
        page: data?.data?.page || 1,
        count: data?.data?.count || 0,
        total: data?.data?.total || 0
      },
      message: data?.message || "Request Successful",
      status: data?.status || 200
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    
    // Return empty data structure on error
    return Response.json({
      data: {
        values: [],
        page: 1,
        count: 0,
        total: 0
      },
      message: "No upcoming events found",
      status: 200
    });
  }
}