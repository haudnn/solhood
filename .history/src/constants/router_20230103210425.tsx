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
  path: '/sprint/game',
   component: <Game />,
 },
 {
  path: '/sprint/result',
   component: <Result />,
 }
 
]
export default router;