import Game from "../pages/sprint/Game";
import Home from "../pages/Home";
import Result from "../pages/sprint/Result";
import Sprint from "../pages/sprint/Sprint";
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