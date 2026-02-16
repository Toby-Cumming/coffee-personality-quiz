"use client";

import { useState } from "react";
import Image from "next/image";
import { questions, coffeeResults, Personality } from "./quizData";

type Screen = "welcome" | "quiz" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Personality[]>([]);
  const [result, setResult] = useState<Personality | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  function startQuiz() {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  function handleAnswer(personality: Personality, answerIndex: number) {
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      const newAnswers = [...answers, personality];
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const winner = calculateResult(newAnswers);
        setResult(winner);
        setScreen("result");
      }
    }, 400);
  }

  function calculateResult(allAnswers: Personality[]): Personality {
    const counts: Partial<Record<Personality, number>> = {};
    const firstSeen: Partial<Record<Personality, number>> = {};

    allAnswers.forEach((p, index) => {
      counts[p] = (counts[p] || 0) + 1;
      if (firstSeen[p] === undefined) {
        firstSeen[p] = index;
      }
    });

    let maxCount = 0;
    let winner: Personality = allAnswers[0];

    for (const [personality, count] of Object.entries(counts) as [Personality, number][]) {
      if (count > maxCount || (count === maxCount && (firstSeen[personality]! < firstSeen[winner]!))) {
        maxCount = count;
        winner = personality;
      }
    }

    return winner;
  }

  if (screen === "welcome") {
    return (
      <div className="quiz-container">
        <div className="welcome-card">
          <div className="welcome-emoji">☕</div>
          <h1 className="welcome-title">Basecamp Coffee</h1>
          <h2 className="welcome-subtitle">Personality Quiz</h2>
          <p className="welcome-description">
            Discover your coffee personality and find the perfect brew that matches who you are.
          </p>
          <p className="welcome-meta">7 questions &middot; 2 minutes</p>
          <button className="start-button" onClick={startQuiz}>
            Find My Coffee ☕
          </button>
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const question = questions[currentQuestion];

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="progress-dots">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`dot ${i < currentQuestion ? "dot-done" : ""} ${i === currentQuestion ? "dot-active" : ""}`}
              />
            ))}
          </div>

          <p className="question-count">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <h2 className="question-text">{question.question}</h2>

          <div className="answers-list">
            {question.answers.map((answer, i) => (
              <button
                key={i}
                className={`answer-card ${selectedAnswer === i ? "answer-selected" : ""}`}
                onClick={() => handleAnswer(answer.personality, i)}
                disabled={selectedAnswer !== null}
              >
                <span className="answer-emoji">{answer.emoji}</span>
                <span className="answer-text">{answer.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "result" && result) {
    const coffeeMatch = coffeeResults[result];

    return (
      <div className="quiz-container">
        <div className="result-card">
          <p className="result-label">Your Coffee Personality</p>
          <h1 className="result-personality">{coffeeMatch.personality}</h1>
          <p className="result-tagline">&ldquo;{coffeeMatch.tagline}&rdquo;</p>

          <div className="result-image-wrapper">
            <Image
              src={coffeeMatch.image}
              alt={coffeeMatch.coffee}
              width={400}
              height={300}
              className="result-image"
            />
          </div>

          <div className="result-coffee-section">
            <p className="result-coffee-label">Your Perfect Brew</p>
            <h2 className="result-coffee-name">{coffeeMatch.coffee}</h2>
            <p className="result-description">{coffeeMatch.description}</p>
          </div>

          <button className="start-button" onClick={startQuiz}>
            Take It Again 🔄
          </button>
        </div>
      </div>
    );
  }

  return null;
}
