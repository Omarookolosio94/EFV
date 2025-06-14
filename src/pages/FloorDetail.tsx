import { Link, useParams } from "react-router-dom";
import { MetaTags } from "../core/components/MetaTags";
import { useFloor } from "../core/hooks/useFloor";
import Loader from "../core/components/Loader";

export default function FloorDetail() {
  const { "tower-slug": towerSlug = "", "floor-slug": floorSlug = "" } =
    useParams();
  const { data, loading } = useFloor(towerSlug, floorSlug);

  return (
    <>
      <MetaTags name="floorDetail" />

      {loading ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <div className="mx-auto max-w-6xl p-4 text-white">
              {/* Back Navigation */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/${towerSlug}`}
                  className="flex items-center gap-2 text-sm text-white hover:underline"
                >
                  <span className="iconify solar--arrow-left-outline" />
                  Back to Floors
                </Link>

                {/* Show current path */}
                <div className="text-xs text-gray-300">
                  <Link to="/" className="link">
                    Floor
                  </Link>{" "}
                  / {data.name}
                </div>
              </div>

              {/* Title */}
              <h1 className="my-8 font-semibold">Select Unit</h1>

              {/* Units List */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {data.units.map((unit) => (
                  <Link
                    key={unit.id}
                    to={`/${towerSlug}/${floorSlug}/${unit.slug}`}
                  >
                    <div className="group relative overflow-hidden border border-white bg-white/80 p-4 shadow-md transition-transform duration-300 ease-in-out">
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 z-0 bg-black/0 transition duration-300 ease-in-out group-hover:bg-black/20"></div>

                      {/* Image */}
                      <img
                        src={unit.thumbnail}
                        alt={unit.name}
                        className="relative z-10 mb-3 h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />

                      <div className="relative z-10 text-center font-medium text-black">
                        {unit.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto p-4 text-white">
              <Link
                to={`/${towerSlug}`}
                className="flex items-center gap-2 text-sm text-white hover:underline"
              >
                <span className="iconify solar--arrow-left-outline" />
                Back to Floors
              </Link>

              <p className="mt-20 text-center text-white">
                The floor details could not be found
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
