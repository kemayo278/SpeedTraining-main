"use client";

import { Suspense } from 'react';

export default function CustomNotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
      <p className="mb-6">La page que vous cherchez n'existe pas.</p>

      <Suspense fallback={<p>Chargement des détails...</p>}>
        {/* <NotFoundContent /> */}
      </Suspense>
    </div>
  );
}
