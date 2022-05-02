import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import ToolTip from './ToolTip';

type ClickTypes = (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);

type BaseProps = {
  icon: JSX.Element;
  label: string;
  withTooltip: boolean;
  isOpen?: boolean;
}

type AsLinkProps = BaseProps & {
  as: 'link';
  path: string;
}

type AsButtonProps = BaseProps & {
  as: 'button';
  handleClick: ClickTypes;
}

type NavItemProps = AsLinkProps | AsButtonProps;

function NavItem(props: NavItemProps) {
  const { as } = props;

  if (as === 'button') {
    const {
      icon, label, handleClick, isOpen, withTooltip,
    } = props;
    return (
      <li>
        <button
          type="button"
          className={`
          flex items-center relative w-full p-2 text-left rounded-md gap-x-2 duration-300 group
          bg-nord-100 dark:bg-nord-600 text-nord-600 dark:text-nord-100 hover:bg-nord-300 dark:hover:bg-nord-300`}
          onClick={handleClick}
        >
          {icon}
          <span className={`${!isOpen && 'hidden'} font-medium whitespace-nowrap`}>{label}</span>
          {withTooltip && (<ToolTip label={label} className={`${isOpen && 'hidden'}`} />)}
        </button>
      </li>
    );
  }

  // link
  if (as === 'link') {
    const {
      path, isOpen, icon, label, withTooltip,
    } = props;
    return (
      <li>
        <NavLink
          to={path}
          className={({ isActive }) => `${isActive && 'bg-nord-300 dark:bg-nord-300'} 
          relative p-2 rounded-md flex items-center gap-x-2 group duration-300 
          bg-nord-100 dark:bg-nord-600 text-nord-600 dark:text-nord-100 hover:bg-nord-300 dark:hover:bg-nord-300`}
        >
          {icon}
          <span className={`${!isOpen && 'hidden'} font-medium whitespace-nowrap`}>
            {label}
          </span>
          {withTooltip && (<ToolTip label={label} className={`${isOpen && 'hidden'}`} />)}
        </NavLink>
      </li>
    );
  }
  throw new Error('could not determine the correct button type');
}

export default NavItem;
