import { useState, useEffect } from 'react'
import questions from './data/questions'

function App() {
  const [currentPage, setCurrentPage] = useState(() => parseInt(localStorage.getItem('currentPage')) || 0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const currentQuestion = questions[currentPage]

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])


  useEffect(() => {
    setAnswered(false)
    setSelectedAnswer(null)
  }, [currentPage])

  const playSound = (src) => {
    try {
      const audio = new Audio(src)
      audio.play().catch(err => console.log(err))
    } catch (e) {
      console.log(e)
    }
  }

  const handleAnswer = (index) => {
    if (answered) return
    setSelectedAnswer(index)
    if (currentQuestion.alternatives[index].correct) {
    }
    setAnswered(true)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(180deg, #ffffff, #f0f4f8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        {/* Score */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#6c757d",
            marginBottom: "16px",
          }}
        >
  
        </div>

        {/* Pregunta */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#333",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          {currentQuestion.text}
        </h2>

        {/* Traducción pregunta */}
        <p
          style={{
            fontSize: "14px",
            color: "#888",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {currentQuestion.translation}
        </p>

        {/* Audio pregunta */}
        <button
          onClick={() => playSound(currentQuestion.audioQuestion)}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4CAF50, #45a049)",
            border: "none",
            color: "#fff",
            fontSize: "32px",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(76, 175, 80, 0.3)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🔊
        </button>

        {/* Imagen */}
        <img
          src={currentQuestion.image}
          alt="question"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "16px",
            marginBottom: "24px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />

        {/* Alternativas */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {currentQuestion.alternatives.map((alt, index) => {
            let buttonStyle = {
              padding: "16px 20px",
              borderRadius: "16px",
              background: "#f8f9fa",
              border: "2px solid #e9ecef",
              color: "#495057",
              fontSize: "18px",
              fontWeight: "500",
              cursor: answered ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }

            if (selectedAnswer === index) {
              if (alt.correct) {
                buttonStyle.background = "#d4edda"
                buttonStyle.borderColor = "#c3e6cb"
                buttonStyle.color = "#155724"
              } else {
                buttonStyle.background = "#f8d7da"
                buttonStyle.borderColor = "#f5c6cb"
                buttonStyle.color = "#721c24"
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={buttonStyle}
              >
                <div style={{ textAlign: "left" }}>
                  <div>{alt.text}</div>
                  <div style={{ fontSize: "13px", color: "#888" }}>
                    {alt.translation}
                  </div>
                </div>

                <span
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation()
                    playSound(alt.audio)
                  }}
                >
                  🔊
                </span>
              </button>
            )
          })}
        </div>

        {/* Navegación */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            ⬅ Prev
          </button>

          <span>
            {currentPage + 1} / {questions.length}
          </span>

          <button
            onClick={() =>
              setCurrentPage(Math.min(questions.length - 1, currentPage + 1))
            }
            disabled={currentPage === questions.length - 1}
          >
            Next ➡
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
