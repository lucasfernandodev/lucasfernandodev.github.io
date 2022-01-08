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
      <g>
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="4.5" cy="9.5" r="1" />
        <circle cx="9.5" cy="4.5" r="1" />
        <circle cx="9.5" cy="14.5" r="1" />
        <circle cx="4.5" cy="19.5" r="1" />
        <circle cx="14.5" cy="9.5" r="1" />
        <circle cx="19.5" cy="4.5" r="1" />
        <circle cx="14.5" cy="19.5" r="1" />
        <circle cx="19.5" cy="14.5" r="1" />
      </g>
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
};
