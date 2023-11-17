// Logo.jsx
const Logo = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="30"
    viewBox="0 0 130 30"
    fill={color} // Use the color prop to dynamically set the fill
  >
    <path
      d="M122.156 0V7.1569H114.938V9.32156H118.34C119.587 9.32156 120.598 10.3234 120.598 11.5604V14.9337H122.782V7.77677H130V5.61211H126.598C125.351 5.61211 124.34 4.61027 124.34 3.37323V0H122.156Z"
      fill={color}
    />
    <path
      d="M20.5088 10.0001C19.9545 10.0001 19.4998 9.8211 19.1324 9.45074C18.7649 9.08654 18.5781 8.62975 18.5781 8.08655C18.5781 7.54334 18.7587 7.11125 19.1324 6.74705C19.4998 6.38286 19.9607 6.19767 20.5088 6.19767C21.0568 6.19767 21.4928 6.38286 21.8602 6.74705C22.2277 7.11125 22.4145 7.56186 22.4145 8.08655C22.4145 8.61124 22.2277 9.08654 21.8602 9.45074C21.4928 9.81493 21.0381 10.0001 20.5088 10.0001Z"
      fill={color}
    />
    <path
      d="M22.4207 11.8643H18.5905C18.5905 11.8643 19.4998 15.0618 19.4998 18.2717C19.4998 21.784 18.5905 25.0371 18.5905 25.0371H22.4207C22.4207 25.0371 21.5115 21.784 21.5115 18.2717C21.5115 15.068 22.4207 11.8643 22.4207 11.8643Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M41.9455 23.4321C43.1973 24.7469 44.8104 25.4074 46.7846 25.4074C48.7714 25.4074 50.3969 24.7469 51.6487 23.4321C52.9005 22.1173 53.5295 20.3457 53.5295 18.3272C53.5295 16.3087 52.9005 14.6606 51.6487 13.3828C50.3969 12.105 48.7714 11.4692 46.7846 11.4692C44.7979 11.4692 43.1786 12.105 41.933 13.3828C40.6874 14.6606 40.0646 16.2408 40.0646 18.3272C40.0646 20.4136 40.6937 22.1173 41.9455 23.4321ZM49.6308 21.642C48.9021 22.4938 47.9555 22.9198 46.7846 22.9198C45.6449 22.9198 44.7169 22.4938 43.9883 21.642C43.2596 20.7902 42.8984 19.6852 42.8984 18.3272C42.8984 17.0371 43.2596 15.9877 43.9883 15.1729C44.7169 14.3643 45.6138 13.9569 46.7846 13.9569C47.9555 13.9569 48.9021 14.3643 49.6308 15.1729C50.3595 15.9815 50.7207 16.9692 50.7207 18.3272C50.7207 19.6852 50.3595 20.7902 49.6308 21.642Z"
      fill={color}
    />
    <path
      d="M74.4867 25.0309H71.653V11.8643H73.8826L74.1068 13.4878L74.3061 14.9199L78.6408 11.4631L80.1978 13.2038L76.4797 16.1297C75.2216 17.1235 74.4867 18.6297 74.4867 20.2285V25.0309Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M82.3838 23.4321C83.6356 24.7469 85.2487 25.4074 87.2229 25.4074C89.2097 25.4074 90.8352 24.7469 92.087 23.4321C93.3388 22.1173 93.9678 20.3457 93.9678 18.3272C93.9678 16.3087 93.3388 14.6606 92.087 13.3828C90.8352 12.105 89.2097 11.4692 87.2229 11.4692C85.2362 11.4692 83.6169 12.105 82.3713 13.3828C81.1257 14.6606 80.5029 16.2408 80.5029 18.3272C80.5029 20.4136 81.132 22.1173 82.3838 23.4321ZM90.0691 21.642C89.3404 22.4938 88.3938 22.9198 87.2229 22.9198C86.0832 22.9198 85.1552 22.4938 84.4266 21.642C83.6979 20.7902 83.3367 19.6852 83.3367 18.3272C83.3367 17.0371 83.6979 15.9877 84.4266 15.1729C85.1552 14.3643 86.0521 13.9569 87.2229 13.9569C88.3938 13.9569 89.3404 14.3643 90.0691 15.1729C90.7978 15.9815 91.159 16.9692 91.159 18.3272C91.159 19.6852 90.7978 20.7902 90.0691 21.642Z"
      fill={color}
    />
    <path
      d="M112.116 11.4631C113.567 11.4631 114.757 11.9137 115.679 12.8149C116.6 13.7162 117.055 14.8458 117.055 16.2038V25.0247H114.246V16.2779C114.246 15.5001 113.985 14.9137 113.468 14.5248C112.951 14.1359 112.34 13.9384 111.637 13.9384C110.584 13.9384 109.743 14.2162 109.114 14.7717C108.485 15.3273 108.168 16.0742 108.149 17.0186V25.0185H105.34V16.2717C105.34 15.4754 105.079 14.889 104.549 14.5063C104.02 14.1236 103.385 13.9322 102.631 13.9322C101.628 13.9322 100.819 14.2162 100.202 14.7779C99.5855 15.3396 99.2679 16.0865 99.2492 17.0124V25.0124H96.4154V11.8643H98.67L98.9191 13.6791C99.355 12.9816 99.9529 12.4384 100.725 12.0495C101.491 11.6606 102.338 11.4631 103.26 11.4631C104.244 11.4631 105.122 11.6853 105.882 12.1359C106.642 12.5804 107.221 13.1976 107.626 13.9754C108.043 13.1791 108.647 12.5618 109.432 12.1236C110.217 11.6853 111.113 11.4631 112.116 11.4631Z"
      fill={color}
    />
    <path
      d="M12.8296 14.6174C12.6117 10.9322 11.6775 7.63592 11.6775 7.63592H15.4952V25.0309H11.6775C11.6775 25.0309 12.6739 21.4383 12.8483 17.2778H2.62821C2.74654 21.2655 3.81775 25.0309 3.81775 25.0309H0V7.63592H3.81775C3.81775 7.63592 2.93338 10.7964 2.68426 14.6174H12.8296Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36.552 13.389C35.4123 12.1051 33.9425 11.4631 32.1426 11.4631C30.0687 11.4631 28.5304 12.2655 27.5277 13.8705L27.2287 11.8581H25.0739V30H28.7982C28.7982 30 27.9699 27.0309 27.7083 23.3951L27.7093 23.3965L27.7114 23.3996C27.7893 23.5118 29.1056 25.4074 32.1426 25.4074C33.9487 25.4074 35.4186 24.7531 36.552 23.4445C37.6855 22.1359 38.2585 20.4445 38.2585 18.3766C38.2585 16.3087 37.6918 14.6791 36.552 13.3952V13.389ZM34.3473 21.6112C33.6809 22.463 32.8153 22.8889 31.7627 22.8889C30.623 22.8889 29.695 22.4568 28.9664 21.5988C28.2377 20.7346 27.8765 19.6297 27.8765 18.2717C27.8765 16.9939 28.2377 15.9569 28.9664 15.1544C29.695 14.352 30.623 13.9507 31.7627 13.9507C32.8153 13.9507 33.6747 14.3643 34.3473 15.1915C35.0137 16.0186 35.35 17.0803 35.35 18.3704C35.35 19.6606 35.0137 20.7593 34.3473 21.6112Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M64.771 6.39519H68.4954V25.0309H66.0976C66.0976 25.0309 66.0415 23.784 65.9419 23.3642C65.9294 23.3333 65.9108 23.2408 65.9108 23.2408C64.9081 24.679 63.513 25.4012 61.7256 25.4012C59.8322 25.4012 58.3002 24.7593 57.1106 23.4753C55.9211 22.1914 55.3294 20.5247 55.3294 18.4692C55.3294 16.4136 55.9211 14.7346 57.1106 13.426C58.3002 12.1174 59.8385 11.4631 61.7256 11.4631C63.2763 11.4631 64.8209 12.105 65.8734 13.1914C65.6243 9.46924 64.771 6.39519 64.771 6.39519ZM61.9747 22.9198C63.0459 22.9198 63.924 22.4938 64.6091 21.6297C65.2942 20.7716 65.6367 19.6544 65.6367 18.2778C65.6367 17.0062 65.3004 15.963 64.6216 15.1606C63.9427 14.3581 63.077 13.9569 61.9747 13.9569C60.8723 13.9569 59.9693 14.3828 59.278 15.2346C58.5866 16.0865 58.2379 17.1852 58.2379 18.4754C58.2379 19.7655 58.5866 20.8334 59.278 21.6667C59.9755 22.5 60.9035 22.9198 61.9747 22.9198Z"
      fill={color}
    />
  </svg>
)

export default Logo
