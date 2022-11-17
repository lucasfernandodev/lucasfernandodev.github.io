import { Slot } from '@radix-ui/react-slot';
import style from './style.module.css';

interface TitleProps {
  className?: string,
  asChild?: boolean
}

const Title: React.FC<TitleProps> =  ({children, className, asChild, ...args}) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag className={[style.title, className].join(" ")} {...args}>
      {children}
    </Tag>
  )
};

export default Title