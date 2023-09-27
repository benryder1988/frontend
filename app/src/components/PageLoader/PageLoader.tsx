// PageLoader.tsx

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default PageLoader;