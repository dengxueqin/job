import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use environment variable for API key
    const apiKey = process.env.WAKATIME_API_KEY;
    
    // Check if API key exists
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'WakaTime API Key not configured' },
        { status: 500 }
      );
    }
    
    // 请求WakaTime API
    const response = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', {
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 返回所需的数据
    return NextResponse.json({
      success: true,
      codingTime: data.data.text
    });
  } catch (error) {
    console.error('WakaTime API请求失败:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 