'use client';
import burgersService from '@/services/burgers-service';
import { TBurgers } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const initialBurgers: TBurgers[] = [
  {
    basePrice: 1,
    grams: 1,
    image: '',
    price: 1,
    text: '',
    title: ''
  }
];

export const useBurgers = () => {
  return useQuery({
    queryKey: ['burgers'],
    queryFn: async () => {
      const response = await burgersService.getBurgersData();
      return response;
    },
    initialData: initialBurgers
  });
};
