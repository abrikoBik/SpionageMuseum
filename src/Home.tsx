import MainPage from "./assets/main_page.png";

function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <div className="relative w-full flex justify-center items-center">
        {/* Картинка */}
        <img
          src={MainPage}
          alt="main"
          className="w-full h-auto object-cover z-10 bg-gradient-to-t from-[#101010] to-[#3D3D3D]"
        />

        {/* Текст поверх картинки, центрированный */}
        <div
          className="
            absolute z-20 text-center text-[#DEE4EB]/80 font-bold
            text-xl xs:text-2xl sm:text-4xl md:text-6xl lg:text-7xl
            w-full max-w-full break-words
            bg-gradient-to-t from-[#D9D9D9]/20 to-[#737373]/20
            px-4 xs:px-6 sm:px-10 py-4 xs:py-6 select-none
          "
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          Цифровая выставка:<br />Шпионские технологии холодной войны.
        </div>
      </div>

      <section className="
        w-full max-w-screen-xl mx-auto
        lg:border-x-3 max-lg:border-x-2  border-white/50 border-dashed
        overflow-x-hidden
      ">
        <div className="
          flex flex-col items-center w-full
          pb-4 xs:pb-6 sm:pb-10
          px-2 xs:px-4 sm:px-8 md:px-10
          pt-2 xs:pt-4 sm:pt-8
          lg:border-b-3 max-lg:border-b-2 border-white/50 border-dashed
        ">
          <h3 className="
            self-start text-[#DEE4EB]/80 font-bold
            text-lg xs:text-2xl sm:text-3xl md:text-5xl
            underline mb-4 xs:mb-6 sm:mb-10
          ">
            Для чего этот проект?
          </h3>
          <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl mb-4 xs:mb-6">
            Добро пожаловать в онлайн-музей «Шпионские технологии Холодной войны»!<br /><br />
            Этот проект создан для всех, кто интересуется историей, технологиями разведки и тайными операциями, а также для тех, кто хочет узнать, как изобретательность и технический прогресс влияли на ход мировой истории. Мы стремимся показать, что эпоха Холодной войны — это не только политическое противостояние, но и время настоящей технологической гонки между разведывательными службами разных стран.<br /><br />
            Наша цель — познакомить вас с уникальными шпионскими устройствами и гаджетами, которые стали символами своего времени. В экспозиции представлены такие легендарные экспонаты, как фоторужьё «Зенит», револьвер «Наган», радиопередатчик «Север», знаменитый болгарский зонт и шпионский телефон. Каждый экспонат сопровождается подробными описаниями и интерактивными материалами.<br /><br />
            Мы хотим сделать историю шпионажа доступной и увлекательной, чтобы каждый посетитель мог не только узнать о технических достижениях, но и почувствовать атмосферу тайных миссий и острых противостояний между разведками мира. Откройте для себя удивительный мир шпионских технологий Холодной войны вместе с нами!<br /><br />
          </p>
          <a
            href="#begin"
            className="
              text-[#DEE4EB]/80 my-3 xs:my-4 sm:my-6 font-bold
              text-base xs:text-lg sm:text-2xl md:text-4xl
              px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4
              rounded-md bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80
              underline hover:bg-[#303030]/90 transition block w-full max-w-xs sm:max-w-md md:max-w-lg text-center
            "
          >
            НАЧАТЬ ЭКСКУРСИЮ
          </a>
        </div>

        <div className="w-full px-2 xs:px-4 sm:px-8 md:px-10 mb-6 xs:mb-8 sm:mb-10 pt-2 xs:pt-4 sm:pt-8 border-white/50 border-dashed">
          <div className="flex flex-col items-center">
            <div className="text-[#DEE4EB]/80 font-bold text-lg xs:text-2xl sm:text-4xl md:text-5xl w-full text-center" id="begin">
              Экспонаты шпионского оборудования времен холодной войны
            </div>
            <div className="w-full h-[2px] sm:h-[4px] bg-[#DEE4EB]/80 my-2 sm:my-5"></div>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              В период Холодной войны шпионское оборудование достигло высокого уровня изощрённости и разнообразия, став важным инструментом в борьбе за информацию между Восточным и Западным блоками. Основной целью таких устройств было скрытное получение данных о военных и политических планах противника, особенно в сфере ядерного оружия и технологий.
            </p>
            <h3 className="self-start text-[#DEE4EB]/80 font-bold text-base xs:text-lg sm:text-2xl md:text-4xl mb-4 xs:mb-6">Ключевые виды шпионского оборудования того времени</h3>
            <ul className="list-disc ml-4 xs:ml-6 mb-2 xs:mb-4 self-start text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl">
              <li><strong>Миниатюрные камеры и фотоаппараты</strong>, маскировавшиеся под обычные предметы одежды и аксессуары, например, камеры в каблуках обуви, зажимах для галстуков и даже в бумажниках.</li>
              <li><strong>Подслушивающие устройства и передатчики</strong>, часто встроенные в обувь или бытовые предметы, позволяющие вести скрытую аудиозапись и передачу информации.</li>
              <li><strong>Оружие-«гаджеты»</strong>, такие как пистолет в тюбике губной помады, перчаточный пистолет и знаменитый болгарский зонтик с ядовитым дротиком, применявшиеся для устранения целей или самообороны шпионов.</li>
              <li><strong>Спутниковые системы разведки</strong>, такие как программы Corona и SAMOS, позволявшие вести космическое наблюдение за военными объектами противника, хотя качество изображений тогда было ограничено.</li>
            </ul>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              Кроме того, широко применялись технологии микрофототехники и невидимых чернил для передачи секретной информации, а также устройства для сверления стен и установки жучков в помещениях.
            </p>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              Шпионские гаджеты времен Холодной войны не только отражали технологический уровень эпохи, но и становились прототипами для многих современных средств скрытого наблюдения и разведки. Их использование было тесно связано с интенсивной борьбой спецслужб, где успех операций во многом зависел от надежности и изобретательности технических средств.
            </p>
            <a
              href="/spy"
              className="
                flex flex-row hover:cursor-pointer w-full xs:w-4/5 sm:w-2/3 md:w-1/2
                my-3 xs:my-4 sm:my-6 font-bold
                px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4
                rounded-md bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80
                hover:bg-[#303030]/90 transition justify-between
              "
            >
              <div className="text-[#DEE4EB]/80 text-base xs:text-lg sm:text-2xl md:text-4xl w-full text-center underline">
                Посмотреть экспонаты
              </div>
            </a>
          </div>
        </div>

        <div className="w-full px-2 xs:px-4 sm:px-8 md:px-10 pt-2 xs:pt-4 sm:pt-8 border-white/50 lg:border-t-3 max-lg:border-t-2 border-dashed">
          <div className="flex flex-col items-center">
            <div className="text-[#DEE4EB]/80 font-bold text-lg xs:text-2xl sm:text-4xl md:text-5xl w-full text-center" id="quiz-description">
              Квиз по шпионским технологиям Холодной войны
            </div>
            <div className="w-full h-[2px] sm:h-[4px] bg-[#DEE4EB]/80 my-2 sm:my-5"></div>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              Пройдите небольшой тест, чтобы проверить свои знания о самых известных шпионских устройствах эпохи Холодной войны. Этот квиз поможет вам лучше понять, насколько изощрёнными были технологии разведки того времени.
            </p>
            <h3 className="self-start text-[#DEE4EB]/80 font-bold text-base xs:text-lg sm:text-2xl md:text-4xl mb-4 xs:mb-6">Зачем проходить этот квиз?</h3>
            <ul className="list-disc ml-4 xs:ml-6 mb-2 xs:mb-4 self-start text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl">
              <li><strong>Проверьте себя</strong> — узнайте, насколько хорошо вы разбираетесь в истории шпионского оборудования.</li>
              <li><strong>Углубите знания</strong> — каждый вопрос связан с реальным экспонатом музея, что делает квиз не только интересным, но и познавательным.</li>
              <li><strong>Испытайте атмосферу разведки</strong> — погрузитесь в мир тайн, улик и скрытых технологий, которые определяли ход истории.</li>
              <li><strong>Узнайте больше об экспонатах</strong> — после прохождения вы получите информацию о том, какие устройства стали символами эпохи шпионажа.</li>
            </ul>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              Вопросы квиза охватывают широкий спектр техники, использовавшейся советскими и западными спецслужбами: от камер-снайперов до радиостанций и смертоносных зонтов. Это идеальный способ закрепить визит в музее или подготовиться к нему.
            </p>
            <p className="text-[#DEE4EB]/80 text-sm xs:text-base sm:text-lg md:text-2xl px-2 xs:px-4 sm:px-8 mb-4 xs:mb-6 self-start">
              Готовы испытать себя? Пройдите тест и узнайте, как много вы знаете о мире шпионов, где каждая деталь могла стать ключевой!
            </p>
            <a
              href="/quiz"
              className="
                flex flex-row hover:cursor-pointer w-full xs:w-4/5 sm:w-2/3 md:w-1/2
                my-3 xs:my-4 sm:my-6 font-bold
                px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4
                rounded-md bg-gradient-to-t from-[#D9D9D9]/80 to-[#737373]/80
                hover:bg-[#303030]/90 transition justify-between
              "
            >
              <div className="text-[#DEE4EB]/80 text-base xs:text-lg sm:text-2xl md:text-4xl w-full text-center underline">
                Начать тест
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
