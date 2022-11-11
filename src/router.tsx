import React from 'react';

import TopPage from 'pages';
import { NotFoundPage } from 'pages/notFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
