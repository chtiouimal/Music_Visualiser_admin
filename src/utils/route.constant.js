import { CollectionsPage, DashboardPage, SongsPage } from "../pages";

export const mainNav = [
  {
    id: 1,
    path: "dashboard",
    element: <DashboardPage />,
    children: [],
  },
  {
    id: 2,
    path: "songs",
    element: <SongsPage />,
    children: [],
  },
  {
    id: 3,
    path: "collections",
    element: <CollectionsPage />,
    children: [":id"],
  },
];
