import Home from "../pages/Home";
import Sprint from "../pages/sprint/Sprint";
import SprintGame from "../pages/sprint/Game";
import SprintResult from "../pages/sprint/Result";
import Audio from "../pages/audio/Audio";
import AudioGame from "../pages/audio/Game";
import AudioResult from "../pages/audio/Result";
import TextBook from "../pages/textbook/TextBook";
const router = [
 {
    path: '/',
    component: <Home />,
 },
 {
   path: '/textbook',
   component: <TextBook />,
},
// Audio
 {
  path: '/audio',
  component: <Audio />,
 },
 {
  path: '/audio/game',
  component: <AudioGame />,
 },
 {
  path: '/audio/result',
  component: <AudioResult />,
 },
// Sprint
 {
  path: '/sprint',
  component: <Sprint />,
  },
 {
  path: '/sprint/game',
  component: <SprintGame />,
 },
 {
  path: '/sprint/result',
  component: <SprintResult />,
 },

 
]
export default router;