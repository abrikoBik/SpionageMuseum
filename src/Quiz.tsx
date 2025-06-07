import React, { useState, useEffect } from 'react';

// Типы
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const SpyQuiz: React.FC = () => {
  // Список вопросов
  const questions: Question[] = [
    { // 1
      question: "Какой объектив использовала камера Зенит-ФС-3 для скрытой съёмки?",
      options: ["Широкоугольный", "Стандартный", "Длиннофокусный", "Макрообъектив"],
      correctAnswer: "Длиннофокусный",
    },
    { // 2
      question: "Какой формат плёнки использовался в камере Зенит-ФС-3?",
      options: ["16 мм", "35 мм", "70 мм", "Плёнка отсутствовала"],
      correctAnswer: "35 мм",
    },
    { // 3
      question: "Что стало основным назначением Зенит-ФС-3?",
      options: [
        "Военная связь",
        "Скрытая фотография объектов противника",
        "Личное фотооборудование разведчиков",
        "Медицинская диагностика"
      ],
      correctAnswer: "Скрытая фотография объектов противника",
    },
    { // 4
      question: "Какое количество патронов помещалось в барабан револьвера Нагант 1895?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
    },
    { // 5
      question: "Какой механизм позволял Наганту уменьшать выход пороховых газов при выстреле?",
      options: ["Укороченный ствол", "Подвижной барабан, продвигающийся вперёд перед выстрелом", "Специальная система затвора", "Глушитель"],
      correctAnswer: "Подвижной барабан, продвигающийся вперёд перед выстрелом",
    },
    { // 6
      question: "В какой войне впервые начал активно использоваться револьвер Нагант 1895?",
      options: [
        "Великая Отечественная война",
        "Русско-японская война",
        "Первая мировая",
        "Гражданская война"
      ],
      correctAnswer: "Русско-японская война",
    },
    { // 7
      question: "Какой яд был использован в болгарском зонтике?",
      options: [
        "Цианид",
        "Рицин",
        "Арсен",
        "Кураре"
      ],
      correctAnswer: "Рицин",
    },
    { // 8
      question: "Кто стал жертвой применения болгарского зонтика?",
      options: [
        "Иосиф Сталин",
        "Георгий Марков",
        "Лев Троцкий",
        "Александр Солженицын"
      ],
      correctAnswer: "Георгий Марков",
    },
    { // 9
      question: "Каким образом яд попадал в организм жертвы через болгарский зонтик?",
      options: [
        "Через вдыхание паров",
        "Прикосновение к ручке",
        "Укол шариком с ядом",
        "Яд добавляли в еду"
      ],
      correctAnswer: "Укол шариком с ядом",
    },
    { // 10
      question: "Какой материал использовался для изготовления капсулы с ядом в болгарском зонтике?",
      options: [
        "Алюминий",
        "Железо",
        "Платина",
        "Серебро"
      ],
      correctAnswer: "Платина",
    },
    { // 11
      question: "Какой тип связи поддерживала радиостанция Р-350?",
      options: [
        "Аналоговая голосовая",
        "Цифровая передача данных",
        "Азбука Морзе",
        "Спутниковый сигнал"
      ],
      correctAnswer: "Азбука Морзе",
    },
    { // 12
      question: "На какую максимальную дальность могла работать радиостанция Р-350?",
      options: [
        "До 100 км",
        "До 1000 км",
        "До 3000 км",
        "До 10 000 км"
      ],
      correctAnswer: "До 3000 км",
    },
    { // 13
      question: "От чего питалась радиостанция Р-350?",
      options: [
        "Электросеть",
        "Батареи",
        "Солнечная энергия",
        "Дизельный генератор"
      ],
      correctAnswer: "Батареи",
    },
    { // 14
      question: "Какие функции выполнял шпионский телефон помимо обычной связи?",
      options: [
        "Слежка за интернет-активностью",
        "Запись разговоров, шифрование и прослушивание",
        "GPS-навигация",
        "Обнаружение других телефонов"
      ],
      correctAnswer: "Запись разговоров, шифрование и прослушивание",
    },
    { // 15
      question: "Какой метод обеспечения секретности использовался в шпионском телефоне?",
      options: [
        "Изменение голоса",
        "Шифрование голоса или передача закодированных сообщений",
        "Передача данных по Wi-Fi",
        "Скрытое голосовое распознавание"
      ],
      correctAnswer: "Шифрование голоса или передача закодированных сообщений",
    },
    { // 16
      question: "Какой экспонат музея символизировал техническое превосходство советской разведки в области оптики и миниатюризации?",
      options: [
        "Шпионский телефон",
        "Радиостанция Р-350",
        "Зенит-ФС-3",
        "Болгарский зонтик"
      ],
      correctAnswer: "Зенит-ФС-3",
    },
    { // 17
      question: "Какой экспонат стал символом тотального контроля и эпохи технической разведки?",
      options: [
        "Зенит-ФС-3",
        "Шпионский телефон",
        "Нагант 1895",
        "Болгарский зонтик"
      ],
      correctAnswer: "Рицин",
    },
  ];

  // Состояния
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Загрузка результата из localStorage при первом запуске
  useEffect(() => {
    const savedResult = localStorage.getItem('quizResult');
    if (savedResult) {
      const parsed = JSON.parse(savedResult);
      if (parsed && typeof parsed.correct === 'number') {
        setCorrectCount(parsed.correct);
        setShowResult(true);
      }
    }
  }, []);

  // Обработчики
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setCorrectCount(correctCount + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      // Сохраняем результат
      const result = { correct: correctCount + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0) };
      localStorage.setItem('quizResult', JSON.stringify(result));
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setCorrectCount(0);
    setShowResult(false);
    localStorage.removeItem('quizResult');
  };

return (
  <main className="flex justify-center items-center h-screen w-full bg-[#101010] relative">
    {/* Кнопка "На главную" */}
    <a
      href="/"
      className="absolute top-6 left-6 px-4 py-2 text-4xl font-extrabold text-[#DEE4EB]/80 hover:bg-[#303030]/90 transition-all z-50 rounded-md"
    >
      {"<"}
    </a>

    {/* Центральный блок с тестом */}
    <div className="w-full max-w-xl mx-auto h-auto bg-gradient-to-t from-gray-100/10 to-gray-400/10 rounded-[20px] p-8 md:p-10 flex flex-col transition-all text-white">
      {!showResult ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#DEE4EB]/80 underline pb-6 transition-all">
            Тест по экспонатам
          </h1>
          <p className="text-sm md:text-base text-[#DEE4EB]/80 mb-4 text-center">
            Вопрос {currentQuestion + 1} из {questions.length}
          </p>
          <h2 className="text-lg md:text-xl text-[#DEE4EB]/80 mb-6">
            {questions[currentQuestion].question}
          </h2>
          <ul className="mb-6 space-y-3 flex-grow">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label className="flex items-center cursor-pointer space-x-3 py-1">
                  <input
                    type="radio"
                    name="quiz-answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span className="text-base md:text-lg text-[#DEE4EB]/80">{option}</span>
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`mt-4 px-6 py-4 rounded-md font-bold text-2xl text-[#DEE4EB]/80 underline bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80 hover:bg-[#303030]/90 transition-all ${
              !selectedAnswer ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Завершить' : 'Следующий'}
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-center transition-all">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DEE4EB]/80 mb-6">Тест завершён!</h2>
          <p className="text-xl text-[#DEE4EB]/80 mb-8">
            Правильных ответов: {correctCount} из {questions.length}
          </p>
          <button
            onClick={restartTest}
            className="px-6 py-4 rounded-md font-bold text-2xl text-[#DEE4EB]/80 underline bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80 hover:bg-[#303030]/90 transition-all"
          >
            Пройти снова
          </button>
        </div>
      )}
    </div>

    {/* Индикатор прогресса внизу */}
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 transition-all">
      <div className="flex space-x-2">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full transition-all duration-300 ${
              currentQuestion === i && !showResult
                ? 'bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80 scale-110'
                : 'bg-gradient-to-t from-[#D9D9D9]/20 to-[#737373]/20 scale-90'
            }`}
          ></div>
        ))}
      </div>
    </div>
  </main>
);
};

export default SpyQuiz;