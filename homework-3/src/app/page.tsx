'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';

export default function Home(){
  const { replace } = useRouter();
  useEffect(() => {
    replace('/shows/all-shows');
  }, []);

  return <LoadingSpinner/>;
};