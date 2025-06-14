import { Link, useParams } from "react-router-dom";
import { MetaTags } from "../core/components/MetaTags";
import { useUnit } from "../core/hooks/useUnit";
import Loader from "../core/components/Loader";

export default function UnitDetail() {
  const {
    "tower-slug": towerSlug = "",
    "floor-slug": floorSlug = "",
    "unit-slug": unitSlug = "",
  } = useParams();
  const { data, loading } = useUnit(towerSlug, floorSlug, unitSlug);

  return (
    <>
      <MetaTags name="unitDetail" />

      {loading ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <div className="mx-auto max-w-4xl p-4 text-white">
              {/* Back Navigation */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/${towerSlug}/${floorSlug}`}
                  className="flex items-center gap-2 text-sm text-white hover:underline"
                >
                  <span className="iconify solar--arrow-left-outline" />
                  Back to Units
                </Link>

                {/* Show current path */}
                <div className="text-xs text-gray-300">
                  <Link to={`/${towerSlug}/${floorSlug}`} className="link">
                    Unit
                  </Link>{" "}
                  / {data.name}
                </div>
              </div>

              {/* Unit Info */}
              <div>
                <h1 className="my-8 font-semibold">{data.name}</h1>

                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={data.layoutImage}
                      alt={data.name}
                      className="h-auto w-full rounded object-cover"
                    />
                  </div>

                  <div className="bg-secondary-dark flex flex-col justify-center gap-4 p-5 md:w-1/2">
                    <p>
                      <span className="font-semibold">Area:</span> {data.area}{" "}
                      sqm
                    </p>
                    <p>
                      <span className="font-semibold">Type:</span>{" "}
                      {data.unitType}
                    </p>
                    <p>
                      <span className="font-semibold">Rooms:</span>{" "}
                      {data.roomCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto p-4 text-white">
              <Link
                to={`/${towerSlug}/${floorSlug}`}
                className="flex items-center gap-2 text-sm text-white hover:underline"
              >
                <span className="iconify solar--arrow-left-outline" />
                Back to Units
              </Link>

              <p className="mt-20 text-center text-white">
                Unit does not exist
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
