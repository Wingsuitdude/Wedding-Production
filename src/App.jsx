import React from 'react'

function App() {
  const stars = Array(200).fill(null);

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden bg-gradient-to-b from-purple-900 via-violet-800 to-indigo-900">
      <div className="absolute inset-0 z-0 perspective-1000">
        {stars.map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white animate-warp-speed"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-gray-800 bg-opacity-50 border-b border-pink-500">
          <div className="container mx-auto px-4 py-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Vite + React + Tailwind CSS
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-bold mb-8 animate-pulse">
            Welcome to the future of Web Development
          </h2>
          <p className="text-xl mb-12 max-w-2xl">
            Streamline your workflow and amplify your productivity. 
          </p>
          <p className="text-xl mb-12 max-w-2xl">
            Harness the synergy of Vite, React, and Tailwind CSS to build sleek, efficient web applications with unparalleled ease.
          </p>
          <p className="text-xl mb-12 max-w-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-lg animate-throb">
            (Start editing the App.jsx to begin.)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {['Vite', 'React', 'Tailwind CSS'].map((tech, index) => (
              <div key={tech} className={`p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-50 border-2 ${
                index === 0 ? 'border-yellow-400 hover:bg-yellow-400' :
                index === 1 ? 'border-cyan-400 hover:bg-cyan-400' :
                'border-green-400 hover:bg-green-400'
              } hover:text-gray-900 transition duration-300`}>
                <h3 className="text-2xl font-semibold mb-2">{tech}</h3>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-gray-800 bg-opacity-50 mt-16">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-gray-400">
              Created with 💖 by <a href="#" className="text-pink-400 hover:underline">David O'Neil</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App