import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from '../src/components/Home/Home'
import Quiz from '../src/components/Quiz/Quiz'
import Statics from '../src/components/Statics/Statics'
import Blogs from '../src/components/Blogs/Blogs'
import ErrorPage from './components/ErrorPage/ErrorPage';
import AllQuiz from './components/AllQuiz/AllQuiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/quiz/:subjectId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.subjectId}`)
          },
          element: <AllQuiz></AllQuiz>
        },

        {
          path: '/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
