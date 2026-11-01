import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const GridIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z" fill="currentColor"/>
  </svg>
);

export const CalenderIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V4.25H16.25V3C16.25 2.58579 16.5858 2.25 17 2.25C17.4142 2.25 17.75 2.58579 17.75 3V4.26462C19.5746 4.38047 20.75 5.86438 20.75 7.75V17.25C20.75 19.183 19.183 20.75 17.25 20.75H6.75C4.817 20.75 3.25 19.183 3.25 17.25V7.75C3.25 5.86438 4.42539 4.38047 6.25 4.26462V3C6.25 2.58579 6.58579 2.25 7 2.25ZM17.75 5.76465H6.25C5.23467 5.76465 4.75 6.53303 4.75 7.75V8.5H19.25V7.75C19.25 6.53303 18.7653 5.76465 17.75 5.76465ZM4.75 10H19.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V10Z" fill="currentColor"/>
  </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 14.1504 19.4265 16.1087 18.0673 17.5855C17.1594 15.6989 15.2285 14.4 13 14.4H11C8.77146 14.4 6.84059 15.6989 5.9327 17.5855C4.57351 16.1087 3.75 14.1504 3.75 12ZM7.44754 18.7808C8.24354 17.0693 9.98295 15.9 12 15.9C14.0171 15.9 15.7565 17.0693 16.5525 18.7808C15.2536 19.7042 13.6885 20.25 12 20.25C10.3115 20.25 8.74641 19.7042 7.44754 18.7808ZM12 6.75C10.4812 6.75 9.25 7.98122 9.25 9.5C9.25 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.5C14.75 7.98122 13.5188 6.75 12 6.75ZM10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z" fill="currentColor"/>
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 18C3.25 17.5858 3.58579 17.25 4 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18Z" fill="currentColor"/>
  </svg>
);

export const TableIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H19C19.9665 3.25 20.75 4.0335 20.75 5V19C20.75 19.9665 19.9665 20.75 19 20.75H5C4.0335 20.75 3.25 19.9665 3.25 19V5ZM4.75 5V8.5H19.25V5C19.25 4.86193 19.1381 4.75 19 4.75H5C4.86193 4.75 4.75 4.86193 4.75 5ZM4.75 10V19C4.75 19.1381 4.86193 19.25 5 19.25H11.25V10H4.75ZM12.75 19H19C19.1381 19.25 19.25 19.1381 19.25 19V10H12.75V19Z" fill="currentColor"/>
  </svg>
);

export const PageIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 3.25C4.14543 3.25 3.25 4.14543 3.25 5.25V18.75C3.25 19.8546 4.14543 20.75 5.25 20.75H18.75C19.8546 20.75 20.75 19.8546 20.75 18.75V8.5C20.75 8.10218 20.592 7.72064 20.3107 7.43934L15.5607 2.68934C15.2794 2.40804 14.8978 2.25 14.5 2.25H5.25C4.14543 2.25 3.25 3.14543 3.25 4.25ZM4.75 5.25C4.75 4.97386 4.97386 4.75 5.25 4.75H14V8C14 8.55228 14.4477 9 15 9H19.25V18.75C19.25 19.0261 19.0261 19.25 18.75 19.25H5.25C4.97386 19.25 4.75 19.0261 4.75 18.75V5.25ZM15.5 4.31066L18.6893 7.5H15.5V4.31066Z" fill="currentColor"/>
  </svg>
);

export const PieChartIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25H12.75V3C12.75 2.58579 12.4142 2.25 12 2.25ZM11.25 3.78491C7.03965 4.38575 3.75 8.01211 3.75 12.4C3.75 17.0392 7.51079 20.8 12.15 20.8C16.5379 20.8 20.1643 17.5104 20.7651 13.3H11.25V3.78491ZM14.25 2.5C14.25 2.08579 14.5858 1.75 15 1.75C19.5563 1.75 23.25 5.44365 23.25 10C23.25 10.4142 22.9142 10.75 22.5 10.75H15C14.5858 10.75 14.25 10.4142 14.25 10V2.5Z" fill="currentColor"/>
  </svg>
);

export const BoxCubeIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6562 2.28125C12.2472 2.0461 11.7528 2.0461 11.3438 2.28125L3.34375 6.85268C2.9515 7.07682 2.70938 7.49125 2.70938 7.94241V16.0576C2.70938 16.5088 2.9515 16.9232 3.34375 17.1473L11.3438 21.7188C11.7528 21.9539 12.2472 21.9539 12.6562 21.7188L20.6562 17.1473C21.0485 16.9232 21.2906 16.5088 21.2906 16.0576V7.94241C21.2906 7.49125 21.0485 7.07682 20.6562 6.85268L12.6562 2.28125ZM12 3.82143L19.2152 7.94241L12 12.0634L4.78482 7.94241L12 3.82143ZM4.20938 9.32835L11.25 13.3516V20.3013L4.20938 16.2781V9.32835ZM12.75 20.3013V13.3516L19.7906 9.32835V16.2781L12.75 20.3013Z" fill="currentColor"/>
  </svg>
);

export const PlugInIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V5.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V5.25C17.8211 5.25 19.5 6.92893 19.5 9V12C19.5 14.8697 17.4338 17.2568 14.7153 17.7885L12.75 21.7192V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21.7192L9.28469 17.7885C6.56619 17.2568 4.5 14.8697 4.5 12V9C4.5 6.92893 6.17893 5.25 8.25 5.25V3C8.25 2.58579 8.58579 2.25 9 2.25ZM6 9C6 7.75736 7.00736 6.75 8.25 6.75H15.75C16.9926 6.75 18 7.75736 18 9V12C18 14.4853 15.9853 16.5 13.5 16.5H10.5C8.01472 16.5 6 14.4853 6 12V9Z" fill="currentColor"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "size-4", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ className = "size-4", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "size-4", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HorizontaLDots: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="4" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
  </svg>
);

export const MoreDotIcon = HorizontaLDots;

export const EyeIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M10 4.375C4.375 4.375 1.25 10 1.25 10C1.25 10 4.375 15.625 10 15.625C15.625 15.625 18.75 10 18.75 10C18.75 10 15.625 4.375 10 4.375Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EyeCloseIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M2.5 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.75 8.75C8.42391 9.07609 8.24087 9.51821 8.24087 9.97917C8.24087 10.4401 8.42391 10.8822 8.75 11.2083C9.07609 11.5344 9.51821 11.7175 9.97917 11.7175C10.4401 11.7175 10.8822 11.5344 11.2083 11.2083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.6708 13.6708C12.5658 14.3644 11.3197 14.7303 10.0417 14.7292C5.35417 14.7292 2.22917 10 2.22917 10C3.04583 8.52083 4.41667 6.94583 6.32917 5.82917M8.33333 5.33333C8.89583 5.2375 9.46667 5.1875 10.0417 5.1875C14.7292 5.1875 17.8542 10 17.8542 10C17.375 10.8667 16.5875 11.8792 15.5333 12.7542" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = "size-4", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M10 15.8333V4.16666M10 4.16666L4.16666 9.99999M10 4.16666L15.8333 9.99999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className = "size-4", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M10 4.16666V15.8333M10 15.8333L4.16666 9.99999M10 15.8333L15.8333 9.99999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="10" cy="10" r="8.75" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AlertIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M10 2.5L1.875 16.875H18.125L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 7.5V11.25M10 13.75H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="10" cy="10" r="3.75" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 1.25V3.125M10 16.875V18.75M1.25 10H3.125M16.875 10H18.75M3.8125 3.8125L5.1375 5.1375M14.8625 14.8625L16.1875 16.1875M3.8125 16.1875L5.1375 14.8625M14.8625 5.1375L16.1875 3.8125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M17.5 10.8333C17.5 14.9755 14.1421 18.3333 10 18.3333C5.85786 18.3333 2.5 14.9755 2.5 10.8333C2.5 6.69116 5.85786 3.33333 10 3.33333C10.3705 3.33333 10.7337 3.36015 11.0883 3.41215C10.2312 4.49845 9.72222 5.86725 9.72222 7.36111C9.72222 10.8139 12.5194 13.6111 15.9722 13.6111C16.5054 13.6111 17.0207 13.5441 17.5113 13.4184C17.5038 13.5559 17.5 13.6942 17.5 13.8333V10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M15 6.66667C15 3.91 12.76 1.66667 10 1.66667C7.24 1.66667 5 3.91 5 6.66667C5 11.6667 2.5 13.3333 2.5 13.3333H17.5C17.5 13.3333 15 11.6667 15 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.58334 16.6667C8.73031 16.921 8.94314 17.1325 9.19839 17.2778C9.45364 17.4231 9.74239 17.497 10.0333 17.497C10.3243 17.497 10.613 17.4231 10.8683 17.2778C11.1235 17.1325 11.3364 16.921 11.4833 16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="9.16667" cy="9.16667" r="6.66667" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14.1667 14.1667L18.3334 18.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = "size-5", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 6A2.75 2.75 0 016 3.25h12A2.75 2.75 0 0120.75 6v12A2.75 2.75 0 0118 20.75H6A2.75 2.75 0 013.25 18V6zm1.5 0c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v8.19l-3.22-3.22a.75.75 0 00-1.06 0L11.5 14.44l-2.47-2.47a.75.75 0 00-1.06 0L4.75 15.19V6zM4.75 18v-1.19l3.75-3.75 2.47 2.47a.75.75 0 001.06 0l3.47-3.47 3.75 3.75V18c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zM9.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"/>
  </svg>
);

