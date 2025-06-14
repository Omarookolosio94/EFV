import { useParams } from "react-router-dom";
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
            <>
              <div>
                <h1>{data.name}</h1>
                <img src={data.layoutImage} width={600} />
                <p>Area: {data.area} sqm</p>
                <p>Type: {data.unitType}</p>
                <p>Rooms: {data.roomCount}</p>
              </div>
            </>
          ) : (
            <p>Unit does not exist</p>
          )}
        </>
      )}
    </>
  );
}
