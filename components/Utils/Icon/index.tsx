import {iconProvider} from './iconProvider';

type IconProp = {
  icon: string;
  className?: string | undefined;
};

const Icon: React.FC<IconProp> = ({ icon, ...arg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...arg}
    >
      {iconProvider[icon] ? iconProvider[icon].icon :'error icon'}
    </svg>
  );
};

export default Icon;
