import { AiOutlineLoading } from 'react-icons/ai';

export const LoaderView = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <AiOutlineLoading className="animate-spin w-12 h-12" />
    </div>
  );
};
