export default function QAnything() {
  // 使用路径一：通过iframe嵌入QAnything
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">文心一言 AI 对话</h1>
        <p className="text-gray-600 mt-2">
          通过百度文心一言大语言模型获取学习帮助和问题解答
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="border rounded-lg overflow-hidden" style={{ height: '600px' }}>
          {/* 嵌入百度文心一言 */}
          <iframe 
            src="https://yiyan.baidu.com/" 
            title="百度文心一言" 
            className="w-full h-full border-none"
          />
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>* 此处嵌入百度文心一言AI对话服务，可以直接在上方输入框中提问</p>
          <p>* 如果iframe加载失败，请访问 <a href="https://yiyan.baidu.com/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">文心一言官方网站</a></p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-3">使用说明</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>直接在上方输入框中提问任何学习相关问题</li>
          <li>文心一言基于百度强大的大语言模型提供回答</li>
          <li>支持代码、数学公式、日常对话等多种形式的内容</li>
          <li>问题应该清晰、具体，以获得更精准的回答</li>
        </ul>
      </div>
    </div>
  );
} 