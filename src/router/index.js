import Covid from "../pages/Covid";
import About from "../pages/About";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";
import Cari from "../pages/Search";
import SearchDetail from "../pages/Search/searchDetail";
import Cv from "../pages/About/detailCv";


const Router = [
  {
    path: "/",
    element: <Indonesia />,
  },
  {
    path: "/indonesia",
    element: <Indonesia />,
  },
  {
    path: "/programming",
    element: <Programming />,
  },
  {
    path: "/covid",
    element: <Covid />,
  },
  {
    path: "/saved",
    element: <Saved />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: ":itemId",
        element: <Cv />,
      },
    ],
  },
  {
    path: "/search",
    element: <Cari />,
    children: [
      {
        path: ":input",
        element: <SearchDetail />,
      },
    ],
  },
];

export default Router;
