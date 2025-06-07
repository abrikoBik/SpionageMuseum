import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, PresentationControls, Loader } from "@react-three/drei"

function Model ({ model, ...props }) {
  const { scene } = useGLTF(model);
  return <primitive object={scene} {...props} />
}

const exhibitions = [
  {
    model: "sputnik_1.glb",
    title: "Спутник - 1",
    description: (
      <>
        <p>
          «Спутник-1» — первый в мире искусственный спутник Земли, запущенный СССР 4 октября 1957 года. Этот исторический аппарат открыл космическую эру человечества и стал символом научного и технологического   прогресса XX века.
        </p>
        <h2 className="mt-4 mb-2 font-bold">Конструкция и характеристики:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Корпус спутника выполнен в виде металлического шара диаметром 58 сантиметров из алюминиево-магниевого сплава.</li>
          <li>Масса спутника — 83,6 килограмма.</li>
          <li>Оснащён четырьмя длинными антеннами (2,4 и 2,9 метра), обеспечивавшими передачу радиосигналов, которые принимали по всему миру.</li>
          <li>Внутри находились серебряно-цинковые аккумуляторы, радиопередающее устройство, система терморегулирования и датчики.</li>
          <li>Спутник был заполнен газообразным азотом для поддержания внутреннего давления и температуры.</li>
        </ul>
        <h2 className="mt-4 mb-2 font-bold">Историческое значение:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Запуск «Спутника-1» осуществлён с космодрома Байконур на ракете-носителе Р-7 под руководством С. П. Королёва и коллектива советских учёных.</li>
          <li>Радиосигналы спутника, знаменитые «бип-бип», были услышаны по всему миру, став символом начала космической эры.</li>
          <li>Аппарат находился на орбите 92 дня, совершив 1440 оборотов вокруг Земли (около 60 миллионов километров), и сгорел в атмосфере 4 января 1958 года.</li>
          <li>Благодаря запуску «Спутника-1» мировая наука получила важные данные о верхних слоях атмосферы и космическом пространстве.</li>
        </ul>
        <h2 className="mt-4 mb-2 font-bold">Значение для человечества:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>«Спутник-1» стал воплощением мечты о полётах в космос, вдохновил поколения учёных и инженеров, а также дал толчок к развитию космических исследований во всём мире.</li>
        </ul>
        <blockquote className="italic text-gray-400 mt-4 p-5 bg-gray-700/10 rounded-lg">
          «Он был мал, этот самый первый искусственный спутник нашей старой планеты, но его звонкие позывные разнеслись по всем материкам и среди всех народов как воплощение дерзновенной мечты человечества» — С. П.    Королёв.
        </blockquote>
        <p className="mt-4">
          Экспонат представлен в виде точной копии первого спутника и позволяет прикоснуться к началу великой космической эпохи.
        </p>
      </>
    ),
  },
  {
    model: "saturn_v.glb",
    title: "Saturn V",
    description: (
      <>
        <p>
          Ракета-носитель <strong>Saturn V</strong> — американская сверхтяжёлая трёхступенчатая ракета, созданная для пилотируемых полётов к Луне в рамках программы «Аполлон» и вывода на орбиту космической станции «Скайлэб». Это величайшее достижение космической инженерии 1960–70-х годов, символ эпохи освоения Луны.
        </p>
        <h2 className="mt-4 mb-2 font-bold">Конструкция и характеристики:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Высота ракеты — около 110 метров, масса при старте — примерно 2 750 тонн.</li>
          <li>Трёхступенчатая конструкция: первая ступень оснащена пятью двигателями F-1 на керосине и жидком кислороде.</li>
          <li>Вторая и третья ступени используют двигатели J-2 на жидком водороде и кислороде.</li>
          <li>Диаметр — до 13 метров, полезная нагрузка на низкую орбиту — до 141 тонны, на траекторию к Луне — до 47 тонн.</li>
        </ul>
        <h2 className="mt-4 mb-2 font-bold">Историческое значение:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Saturn V обеспечила все пилотируемые лунные миссии, включая знаменитую высадку «Аполлона-11» в 1969 году.</li>
          <li>Ракета вывела на орбиту первую американскую орбитальную станцию «Скайлэб».</li>
          <li>До появления современных сверхтяжёлых ракет оставалась самой мощной в мире.</li>
          <li>Её запуск стал символом технологического прогресса и инженерного гения XX века.</li>
        </ul>
        <h2 className="mt-4 mb-2 font-bold">Значение для человечества:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Saturn V стала ключом к освоению Луны и вдохновила поколения учёных, инженеров и исследователей космоса.</li>
          <li>Этот экспонат позволяет прикоснуться к эпохе великих космических открытий и понять масштаб человеческих достижений.</li>
        </ul>
        <blockquote className="italic text-gray-400 mt-4 p-5 bg-gray-700/10 rounded-lg">
          «Saturn V — это не просто ракета, это символ мечты и смелости человечества покорить космос» — современный космический историк.
        </blockquote>
        <p className="mt-4">
          Экспонат представлен в виде точной модели ракеты Saturn V, демонстрирующей её внушительные размеры и техническое совершенство.
        </p>
      </>
    ),
  },
  {
    model: "sokol.glb",
    title: "Скафандр Сокол",
    description: (
      <>
      <p> Космический скафандр <strong>«Сокол»</strong> — советский и российский аварийно-спасательный скафандр, разработанный для защиты космонавтов на борту корабля «Союз» во время старта, посадки, стыковки и расстыковки. Используется с 1973 года и является символом безопасности пилотируемых полётов. </p> <h2 className="mt-4 mb-2 font-bold">Назначение и особенности:</h2> <ul className="list-disc ml-6 mb-4"> <li>Облегчённый скафандр массой около 9–10 кг, обеспечивающий защиту в случае разгерметизации корабля.</li> <li>Не предназначен для выхода в открытый космос, но способен поддерживать жизнедеятельность в вакууме до 125 минут.</li> <li>Индивидуальное изготовление под каждого космонавта для плотного прилегания и герметичности.</li> <li>Оснащён автономной системой подачи кислорода и минимальными средствами жизнеобеспечения.</li> <li>Современная модификация «Сокол-М» предусматривает многоразовое использование и улучшенную конструкцию с герметичной молнией и регулируемыми размерами.</li> </ul> <h2 className="mt-4 mb-2 font-bold">Историческое значение:</h2> <ul className="list-disc ml-6 mb-4"> <li>Скафандр «Сокол» стал обязательным средством защиты после трагедии «Союз-11» и спас жизни многих космонавтов.</li> <li>Используется во всех пилотируемых миссиях на кораблях «Союз» и планируется для корабля «Орёл».</li> <li>Отражает высокий уровень инженерной мысли и заботу о безопасности человека в космосе.</li> </ul> <h2 className="mt-4 mb-2 font-bold">Значение для человечества:</h2> <ul className="list-disc ml-6 mb-4"> <li>Скафандр «Сокол» — важный элемент обеспечения безопасности космонавтов и вдохновение для развития космических технологий.</li> <li>Экспонат позволяет познакомиться с технологиями защиты человека в экстремальных условиях космоса и ощутить масштаб космических достижений.</li> </ul> <blockquote className="italic text-gray-400 mt-4 p-5 bg-gray-700/10 rounded-lg"> «Скафандр «Сокол» — это символ ответственности и инженерного гения, который защищает жизнь каждого, кто отправляется в космос» — современный космический историк. </blockquote> <p className="mt-4"> Экспонат представлен в виде подлинного или макетного скафандра, демонстрирующего уникальные инженерные решения российских специалистов и вклад в безопасность пилотируемых полётов. </p> </>
    )
  }
];

function App() {
  const [curExhibition, setExhibition] = useState(0);

  return (
    <main className="flex flex-row w-[100vw] h-[100vh] bg-[#101010] relative">
      <div className="w-[40%] h-full p-10">
        <div className="w-full h-full bg-linear-to-t from-gray-100/10 to-gray-400/10 rounded-[20px] max-lg:rounded-[10px] px-10 pb-10 flex flex-col transition">
          <h1 className="text-[96px] max-lg:text-[32px] w-full font-semibold text-[#DEE4EB] text-center underline pb-4 transition">
            {exhibitions[curExhibition].title}
          </h1>
          <section className="text-[16px] max-lg:text-[8px] text-[#DEE4EB] flex-1 overflow-y-auto transition">
            {exhibitions[curExhibition].description}
          </section>
        </div>
      </div>
      <div className="w-[60%] h-full relative">
        <button
          onClick={() => setExhibition(Math.max(curExhibition - 1, 0))}
          disabled={curExhibition === 0}
          className={`absolute w-10 h-10 text-[#DEE4EB]/20 text-4xl font-bold top-1/2 -translate-y-1/2 left-6 cursor-pointer z-40 ${curExhibition === 0 ? 'opacity-30 pointer-events-none' : ''}`}
        >{"<"}</button>
        <button
          onClick={() => setExhibition(Math.min(curExhibition + 1, exhibitions.length - 1))}
          disabled={curExhibition === exhibitions.length - 1}
          className={`absolute w-10 h-10 text-[#DEE4EB]/20 text-4xl font-bold top-1/2 -translate-y-1/2 right-6 cursor-pointer z-40 ${curExhibition === exhibitions.length - 1 ? 'opacity-30 pointer-events-none' : ''}`}
        >{">"}</button>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={["#101010"]} />
          <PresentationControls
          key={exhibitions[curExhibition].model}
          speed={1.5}
          global
          polar={[-0.2, 0.2]}
          rotation={[0, Math.PI + Math.PI / 4, 0]}
          >
                <Stage environment={"studio"} castShadow>
              <Model scale={0.005} model={`/${exhibitions[curExhibition].model}`} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="absolute h-16 max-lg:h-8 left-1/2 -translate-x-1/2 bottom-10 rounded-[20px] bg-linear-to-t from-gray-100/10 to-gray-400/10 flex flex-row items-center justify-center p-5">
        {exhibitions.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 max-lg:w-4 max-lg:h-4 rounded-full mx-1 transition-all duration-200 ${
              curExhibition === i ? 'bg-linear-to-t from-gray-100/30 to-gray-400/30' : 'bg-linear-to-t from-gray-100/10 to-gray-400/10 scale-70'
            }`}
          />
        ))}
      </div>

      <div className="absolute w-[100vw] h-[100vh] z-50 bg-linear-to-t from-gray-500/90 to-gray-800/90 text-center flex items-center justify-center alert">
        <div className="text-red-600 font-bold text-[96px] max-sm:text-[48px]">PEREVERNI</div>
      </div>
    </main>
  );
}

export default App
