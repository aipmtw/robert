function App() {
  const notes = [
    {
      date: '2026-03-16',
      title: '開始使用 Claude Code',
      content: '這是我的第一篇 AI 使用筆記。我將在這裡記錄使用 AI Claude Code 的心得與學習筆記。歡迎交流！'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col">
      <div style={{textAlign:'center',padding:'10px 0',background:'linear-gradient(90deg,#1e3a5f,#2d5a87)',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <a href="https://dailyai.tw/" target="_blank" rel="noopener noreferrer" style={{color:'#e0e0e0',textDecoration:'none',fontSize:'14px'}}>
          歡迎訪問 <strong style={{color:'#60a5fa'}}>Daily AI Taiwan</strong> — 立足台灣，讀懂 AI
        </a>
      </div>
      <nav className="max-w-6xl mx-auto px-6 py-6 w-full">
        <a href="https://aipm.com.tw/" className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-lg transition inline-block">
          ← aipm.com.tw
        </a>
      </nav>
      <main className="flex-1 flex flex-col items-center text-center px-6 pb-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-12">
          robert
        </h1>
        <p className="mt-4 text-slate-400">Welcome to my space</p>

        <section className="mt-12 w-full max-w-3xl text-left">
          <h2 className="text-2xl font-bold text-indigo-300 mb-6">📝 Robert's AI 使用筆記</h2>
          <div className="space-y-6">
            {notes.map((note, i) => (
              <article key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">{note.date}</span>
                  <h3 className="text-lg font-semibold text-cyan-300">{note.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{note.content}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
