'use client';

import { useSearchParams } from 'next/navigation';

export default function NotFoundContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <>
      {error && (
        <p className="text-red-600 mt-2">Erreur détectée : {error}</p>
      )}
    </>
  );
}
