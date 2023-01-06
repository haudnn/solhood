import Game from "../pages/Game";
import Home from "../pages/Home";
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
 }
 
]
export default router;