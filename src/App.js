import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from '../src/components/Home/Home'
import Quiz from '../src/components/Quiz/Quiz'
import Statics from '../src/components/Statics/Statics'
import Blogs from '../src/components/Blogs/Blogs'
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
