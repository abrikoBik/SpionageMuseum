import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, PresentationControls, Loader } from "@react-three/drei"

function Model ({ model, ...props }) {
  const { scene } = useGLTF(model);
  return <primitive object={scene} {...props} />
}

const exhibitions = [

];

function Spy() {
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

export default Spy
