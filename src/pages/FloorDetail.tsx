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
            <>
              <div>
                <h1>{data.name}</h1>
                <div style={{ display: "flex", gap: 20 }}>
                  {data.units.map((unit) => (
                    <Link
                      key={unit.id}
                      to={`/${towerSlug}/${floorSlug}/${unit.slug}`}
                    >
                      <div style={{ border: "1px solid #ddd", padding: 20 }}>
                        <img src={unit.thumbnail} width={300} height={200} />
                        <div>{unit.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>No available units</p>
          )}
        </>
      )}
    </>
  );
}
