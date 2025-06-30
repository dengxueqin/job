"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [codingTime, setCodingTime] = useState<string>('获取中...');
  const [error, setError] = useState<string | null>(null);

  // 通过我们的API路由获取WakaTime数据
  useEffect(() => {
    const fetchWakaTime = async () => {
      try {
        // 请求我们的API路由而不是直接请求WakaTime API
        const response = await fetch('/api/wakatime');
        
        if (!response.ok) {
          throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setCodingTime(data.codingTime || '暂无数据');
          setError(null);
        } else {
          throw new Error(data.error || '获取数据失败');
        }
      } catch (err) {
        console.error('获取WakaTime数据失败:', err);
        setCodingTime('获取失败');
        setError(`数据获取失败: ${err instanceof Error ? err.message : String(err)}`);
      }
    };
    
    fetchWakaTime();
  }, []);

  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">©2025 written by </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              <span className="font-semibold">累计编码时间（WakaTime）:</span>{' '}
              <span className={`${error ? 'text-red-500' : 'text-primary'}`}>{codingTime}</span>
              {error && <span className="text-xs text-red-500 block">{error}</span>}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="https://github.com/yourusername/code-portfolio" className="text-gray-500 hover:text-gray-700">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 