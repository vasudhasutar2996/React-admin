import { Link } from 'react-router-dom';
import UserOne from '../../images/user-13.png';

const DropdownUser = () => {

  return (
    <div className="relative">
      <Link to="#">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
           Admin
          </span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
      </Link>
    </div>
  );
};

export default DropdownUser;
