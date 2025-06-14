import { Link, useParams } from "react-router-dom";
import { MetaTags } from "../core/components/MetaTags";
import { useTower } from "../core/hooks/useTower";
import Loader from "../core/components/Loader";

export default function TowerDetail() {
  const { "tower-slug": slug = "" } = useParams();
  const { data, loading } = useTower(slug);

  return (
    <>
      <MetaTags name="towerDetail" />

      {loading ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <div className="mx-auto max-w-6xl p-4 text-white">
              {/* Back Navigation */}
              <div className="flex items-center justify-between">
                <Link to="/" className="link">
                  <span className="iconify solar--arrow-left-outline mr-2" />
                  <span>Back to Tower</span>
                </Link>

                {/* Show current path */}
                <div className="text-xs text-gray-300">
                  <Link to="/" className="link">
                    Tower
                  </Link>
                  / {data.name}
                </div>
              </div>

              <h1 className="my-8 font-semibold">Select Floor</h1>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.floors.map((floor) => (
                  <Link key={floor.id} to={`/${data.slug}/${floor.slug}`}>
                    <div className="border-white bg-white/80 p-8 text-center text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                      <p className="text-sm text-gray-600">
                        Floor {floor.number}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto p-4 text-white">
              <Link
                to="/"
                className="flex items-center gap-2 text-sm text-white hover:underline"
              >
                <span className="iconify solar--arrow-left-outline" />
                Back to Towers
              </Link>

              <p className="mt-20 text-center text-white">
                The tower you are looking for no longer exist
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
