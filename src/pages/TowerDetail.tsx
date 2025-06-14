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
            <>
              <h1>Select Floors</h1>
              <ul>
                {data.floors.map((floor) => (
                  <li key={floor.id}>
                    <Link to={`/${data.slug}/${floor.slug}`}>{floor.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No towers</p>
          )}
        </>
      )}
    </>
  );
}
