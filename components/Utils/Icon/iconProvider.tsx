import { SVGProps } from "react";

interface iconProvider {
  icon: SVGProps<SVGElement>;
}

export const iconProvider: Record<string, iconProvider> = {
  frontendMentor: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="4" width="16" height="4" rx="1"></rect>
        <rect x="4" y="12" width="6" height="8" rx="1"></rect>
        <line x1="14" y1="12" x2="20" y2="12"></line>
        <line x1="14" y1="16" x2="20" y2="16"></line>
        <line x1="14" y1="20" x2="20" y2="20"></line>
      </g>
    ),
  },
  arrowRight: {
    icon: (
      <g>
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="15" y1="16" x2="19" y2="12"></line>
        <line x1="15" y1="8" x2="19" y2="12"></line>
      </g>
    ),
  },
  codepen: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
        <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
        <line x1="3" y1="9" x2="3" y2="15"></line>
        <line x1="21" y1="9" x2="21" y2="15"></line>
        <line x1="12" y1="3" x2="12" y2="9"></line>
        <line x1="12" y1="15" x2="12" y2="21"></line>
      </g>
    ),
  },
  github: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
      </g>
    ),
  },
  building: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
        <line x1="13" y1="7" x2="13" y2="7.01"></line>
        <line x1="17" y1="7" x2="17" y2="7.01"></line>
        <line x1="17" y1="11" x2="17" y2="11.01"></line>
        <line x1="17" y1="15" x2="17" y2="15.01"></line>
      </g>
    ),
  },
  instagram: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
      </g>
    ),
  },
  link: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
      </g>
    ),
  },
  location: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="11" r="3"></circle>
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
      </g>
    ),
  },
  email: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
      </g>
    ),
  },
  close: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </g>
    ),
  },
  linkedin: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <line x1="8" y1="11" x2="8" y2="16"></line>
        <line x1="8" y1="8" x2="8" y2="8.01"></line>
        <line x1="12" y1="16" x2="12" y2="11"></line>
        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
      </g>
    ),
  },
  logo: {
    icon: (
      <>
     <g clipPath="url(#clip0_3_138)">
<path d="M10.2953 41H9.75534C8.81934 41 7.91934 40.91 7.05534 40.73C6.19134 40.55 5.41734 40.226 4.73334 39.758C4.08534 39.29 3.54534 38.642 3.11334 37.814C2.71734 36.986 2.51934 35.906 2.51934 34.574V1.796H3.38334C4.24734 1.796 5.09334 1.904 5.92134 2.12C6.74934 2.3 7.48734 2.642 8.13534 3.146C8.78334 3.614 9.30534 4.262 9.70134 5.09C10.0973 5.918 10.2953 6.98 10.2953 8.276V41ZM22.1213 35.816C22.1213 36.428 21.9953 37.04 21.7433 37.652C21.5273 38.264 21.1853 38.822 20.7173 39.326C20.2853 39.794 19.7093 40.19 18.9893 40.514C18.3053 40.838 17.5133 41 16.6133 41H16.3973C15.4253 41 14.6153 40.838 13.9673 40.514C13.3193 40.154 12.7793 39.74 12.3473 39.272C11.9513 38.768 11.6633 38.246 11.4833 37.706C11.3393 37.13 11.2673 36.626 11.2673 36.194C11.2673 35.906 11.2673 35.654 11.2673 35.438C11.3033 35.186 11.3753 34.916 11.4833 34.628C11.9513 35.06 12.5273 35.276 13.2113 35.276C13.7513 35.276 14.2013 35.114 14.5613 34.79C14.9213 34.43 15.1013 33.908 15.1013 33.224V30.578C15.1733 30.542 15.4073 30.524 15.8033 30.524C16.2353 30.488 16.5773 30.47 16.8293 30.47C17.2253 30.47 17.7293 30.542 18.3413 30.686C18.9533 30.794 19.5293 31.046 20.0693 31.442C20.6453 31.838 21.1313 32.396 21.5273 33.116C21.9233 33.8 22.1213 34.7 22.1213 35.816Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_138">
<rect width="23" height="41" fill="white"/>
</clipPath>
</defs>
      
      </>
    ),
  },
  menu: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="8" x2="20" y2="8"></line>
        <line x1="4" y1="16" x2="20" y2="16"></line>
      </g>
    ),
  },

  home: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </g>
    ),
  },

  about: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </g>
    ),
  },

  skills: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
        <circle cx="12" cy="12" r="3" />
      </g>
    ),
  },

  projects: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </g>
    ),
  },

  contact: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </g>
    ),
  },
  me: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </g>
    ),
  },
  quality: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="15" cy="15" r="3"></circle>
        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
        <line x1="6" y1="9" x2="18" y2="9"></line>
        <line x1="6" y1="12" x2="9" y2="12"></line>
        <line x1="6" y1="15" x2="8" y2="15"></line>
      </g>
    ),
  },
  rocket: {
    icon: (
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
        <circle cx="15" cy="9" r="1"></circle>
      </g>
    ),
  },
};
