import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
