import { Navigate } from 'react-router-dom';
import { useTokenGate } from '../../../../../libs/ui/token-gate/src';

const TokenGatedRoute = ({ children }: { children: any }) => {
  const isVerifed = useTokenGate();

  if (!isVerifed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default TokenGatedRoute;
