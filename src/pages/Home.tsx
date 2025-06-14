import { MetaTags } from "../core/components/MetaTags";
import Loader from "../core/components/Loader";
import { Link } from "react-router-dom";
import { useTowers } from "../core/hooks/useTowers";

export default function Home() {
  const { data, loading } = useTowers();

  return (
    <>
      <MetaTags name="home" />

      {loading ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <div className="flex min-h-[80vh] items-center justify-center">
              <div className="text-center">
                <h1 className="mb-8 font-medium text-white">Select Tower</h1>
                <div className="flex flex-wrap justify-center gap-8">
                  {data.map((tower) => (
                    <Link key={tower.id} to={`/${tower.slug}`}>
                      <div className="border border-white bg-white/80 px-8 py-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        <p className="font-medium text-black">{tower.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>No towers</p>
          )}
        </>
      )}
    </>
  );
}
