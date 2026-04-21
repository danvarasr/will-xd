import { useState, useRef } from 'react'
import './App.css'
import questions from './data/questions'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const currentQuestion = questions[currentPage]

  // 🎧 referencia al audio
  const audioRef = useRef(null)

  const playSound = (src) => {
    const audio = audioRef.current
    if (!audio) return

    audio.pause()        // detiene si hay otro sonando
    audio.src = src      // asigna nuevo audio
    audio.load()         // fuerza carga

    audio.play().catch((err) => {
      console.log("Error audio:", err)
    })
  }

  return (
    <div className="book">
      <div className="page">

        {/* PREGUNTA */}
        <div className="question-section">
          <h2>{currentQuestion.text}</h2>
          <button
            className="sound-btn"
            onClick={() => playSound(currentQuestion.audioQuestion)}
          >
            🔊
          </button>
        </div>

        {/* IMAGEN */}
        <div className="image-section">
          <img
            src={currentQuestion.image}
            alt="question"
            className="image"
          />
        </div>

        {/* ALTERNATIVAS */}
        <div className="alternatives-section">
          {currentQuestion.alternatives.map((alt, index) => (
            <div key={index} className="alternative">
              <span>{alt.text}</span>
              <button
                className="sound-btn"
                onClick={() => playSound(alt.audio)}
              >
                🔊
              </button>
            </div>
          ))}
        </div>

        {/* NAVEGACIÓN */}
        <div className="navigation">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            Previous
          </button>

          <span>
            Page {currentPage + 1} of {questions.length}
          </span>

          <button
            onClick={() =>
              setCurrentPage(Math.min(questions.length - 1, currentPage + 1))
            }
            disabled={currentPage === questions.length - 1}
          >
            Next
          </button>
        </div>

        {/* 🎧 ELEMENTO AUDIO (CLAVE) */}
        <audio ref={audioRef} />

      </div>
    </div>
  )
}

export default App