import { ThreeDots } from 'react-loader-spinner';
import './Loader.module.css';

export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#ff4081"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    </div>
  );
}
