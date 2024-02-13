import { Provider, useSelector } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demmo2 from "./components/Demmo2";
import Subscription from "./components/Subscription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/demo", elememt: <Demo /> },
      { path: "/demo2", element: <Demmo2 /> },
      { path: "/subscription", element: <Subscription /> },
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
