import Game from "../pages/Game";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Sprint from "../pages/Sprint";
const router = [
 {
    path: '/',
    component: <Home />,
 },
 {
   path: '/sprint',
   component: <Sprint />,
 },
 {
  path: '/game',
   component: <Game />,
 },
 {
  path: '/result',
   component: <Result />,
 }
 
]
export default router;