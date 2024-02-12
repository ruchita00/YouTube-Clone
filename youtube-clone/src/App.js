import { Provider, useSelector } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
