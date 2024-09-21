import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
      <p className="mt-4 text-xl font-semibold text-blue-800">
        Loading ...
      </p>
    </div>
  );
};

export default Loading;