import { GoodDetailsItem } from 'components/GoodDetailsItem';
import { useAuth } from 'hooks';

export const GoodDetailsPage = () => {
  const { isRefreshing } = useAuth();
  return !isRefreshing && <GoodDetailsItem />;
};
