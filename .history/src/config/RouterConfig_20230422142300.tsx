import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import {router} from '../constants';
const RouterConfig = () => {


  return (
    <Routes>
    {router.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))}
  </Routes>
  )
}

export default RouterConfig