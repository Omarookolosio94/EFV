export {};

declare global {
  interface RouteType {
    path?: string;
    index?: boolean;
    element: ReactNode;
    children?: RouteType[];
  }

  interface MetaDataType {
    [key: string]: {
      title: string;
      description: string;
      path: string;
    };
  }

  interface Unit {
    id: string;
    name: string;
    slug: string;
    area: number;
    unitType: string;
    roomCount: number;
    thumbnail: string;
    layoutImage: string;
  }

  interface Floor {
    id: string;
    name: string;
    slug: string;
    number: number;
    units: Unit[];
  }

  interface Tower {
    id: string;
    name: string;
    slug: string;
    floors: Floor[];
  }
}
