import React, { useEffect } from "react";

function Logo(props: { isDark?: boolean }) {
  const [animated, setAnimated] = React.useState(0);
  useEffect(() => {
    setAnimated(animated + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isDark]);

  // useEffect(() => {
  //   if (animated === 1 && !props.isDark) {
  //     const interval = setInterval(() => {
  //       setAnimated(0);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  const Path = (prop: { d: string; sda: number }) => {
    return (
      <path
        className="transition-all duration-500 ease-in-out"
        strokeDasharray={prop.sda}
        strokeDashoffset={0}
        style={{
          animation:
            props.isDark || animated > 1 ? "" : "textAnimate 5s alternate ",
        }}
        d={prop.d}
        stroke={props.isDark ? "black" : "white"}
        strokeWidth="2"
        fill={props.isDark ? "black" : animated > 1 ? "white" : "transparent"}
        // fill={props.isDark ? "transparent" : "transparent"}
      />
    );
  };

  return (
    <div>
      {/* <span
        className={`${
          props.isDark &&
          "bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]"
        } transition-all duration-500 ease-in-out text-2xl sm:text-4xl font-extrabold tracking-wide `}
      >
        Scaptor
      </span> */}
      <svg
        viewBox="0 0 361 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 sm:w-38 xl:w-40 transition-all duration-500 ease-in-out"
      >
        <Path
          d="M25.744 72.536C20.048 72.536 14.928 70.872 10.384 67.544C5.84 64.216 2.704 59.544 0.975998 53.528L11.152 49.4C12.176 53.176 13.968 56.28 16.528 58.712C19.152 61.08 22.288 62.264 25.936 62.264C29.328 62.264 32.208 61.4 34.576 59.672C36.944 57.88 38.128 55.448 38.128 52.376C38.128 49.56 37.072 47.256 34.96 45.464C32.912 43.608 29.296 41.752 24.112 39.896L19.792 38.36C15.184 36.76 11.312 34.456 8.176 31.448C5.04 28.44 3.472 24.472 3.472 19.544C3.472 16.152 4.4 13.016 6.256 10.136C8.112 7.256 10.672 4.984 13.936 3.32C17.264 1.592 21.008 0.727997 25.168 0.727997C31.184 0.727997 35.984 2.2 39.568 5.144C43.152 8.024 45.552 11.288 46.768 14.936L37.072 19.064C36.368 16.888 35.024 14.968 33.04 13.304C31.056 11.64 28.496 10.808 25.36 10.808C22.224 10.808 19.568 11.608 17.392 13.208C15.28 14.808 14.224 16.856 14.224 19.352C14.224 21.72 15.184 23.672 17.104 25.208C19.024 26.744 22.032 28.216 26.128 29.624L30.448 31.064C36.336 33.112 40.88 35.8 44.08 39.128C47.344 42.392 48.976 46.776 48.976 52.28C48.976 56.76 47.824 60.536 45.52 63.608C43.216 66.616 40.272 68.856 36.688 70.328C33.168 71.8 29.52 72.536 25.744 72.536Z"
          sda={322}
        />

        <Path
          d="M82.2063 72.536C77.3423 72.536 72.9583 71.416 69.0543 69.176C65.2143 66.936 62.2062 63.864 60.0302 59.96C57.9182 55.992 56.8622 51.512 56.8622 46.52C56.8622 41.528 57.9182 37.08 60.0302 33.176C62.2062 29.208 65.2143 26.104 69.0543 23.864C72.9583 21.624 77.3423 20.504 82.2063 20.504C87.5823 20.504 92.1582 21.72 95.9342 24.152C99.7103 26.584 102.398 29.88 103.998 34.04L94.3023 38.072C92.1263 32.888 87.9983 30.296 81.9183 30.296C79.2943 30.296 76.8623 30.968 74.6223 32.312C72.4463 33.656 70.6863 35.576 69.3423 38.072C68.0623 40.504 67.4222 43.32 67.4222 46.52C67.4222 49.72 68.0623 52.568 69.3423 55.064C70.6863 57.56 72.4463 59.48 74.6223 60.824C76.8623 62.168 79.2943 62.84 81.9183 62.84C84.9903 62.84 87.6143 62.168 89.7903 60.824C92.0303 59.416 93.7263 57.432 94.8783 54.872L104.382 59C102.526 63.16 99.7103 66.456 95.9342 68.888C92.1582 71.32 87.5823 72.536 82.2063 72.536Z"
          sda={238}
        />

        <Path
          d="M128.254 72.536C124.734 72.536 121.598 71.864 118.846 70.52C116.094 69.112 113.95 67.16 112.414 64.664C110.878 62.104 110.11 59.224 110.11 56.024C110.11 50.968 111.998 46.968 115.774 44.024C119.614 41.08 124.446 39.608 130.27 39.608C133.15 39.608 135.742 39.896 138.046 40.472C140.35 40.984 142.174 41.56 143.518 42.2V39.704C143.518 36.696 142.398 34.264 140.158 32.408C137.918 30.488 135.038 29.528 131.518 29.528C129.022 29.528 126.654 30.072 124.414 31.16C122.238 32.248 120.478 33.752 119.134 35.672L111.742 30.008C113.918 27 116.734 24.664 120.19 23C123.646 21.336 127.486 20.504 131.71 20.504C138.814 20.504 144.286 22.264 148.126 25.784C151.966 29.24 153.886 34.136 153.886 40.472V71H143.518V65.144H143.038C141.63 67.256 139.646 69.016 137.086 70.424C134.526 71.832 131.582 72.536 128.254 72.536ZM130.078 63.8C132.638 63.8 134.942 63.192 136.99 61.976C139.038 60.76 140.638 59.128 141.79 57.08C142.942 55.032 143.518 52.824 143.518 50.456C142.046 49.624 140.318 48.952 138.334 48.44C136.414 47.928 134.398 47.672 132.286 47.672C128.318 47.672 125.406 48.472 123.55 50.072C121.694 51.608 120.766 53.624 120.766 56.12C120.766 58.36 121.63 60.216 123.358 61.688C125.086 63.096 127.326 63.8 130.078 63.8Z"
          sda={236}
        />

        <Path
          d="M165.01 22.04H175.09V28.472H175.57C176.978 26.232 179.058 24.344 181.81 22.808C184.562 21.272 187.666 20.504 191.122 20.504C195.538 20.504 199.538 21.624 203.122 23.864C206.706 26.104 209.522 29.208 211.57 33.176C213.682 37.08 214.738 41.528 214.738 46.52C214.738 51.512 213.682 55.992 211.57 59.96C209.522 63.864 206.706 66.936 203.122 69.176C199.538 71.416 195.538 72.536 191.122 72.536C187.666 72.536 184.562 71.768 181.81 70.232C179.058 68.696 176.978 66.84 175.57 64.664H175.09L175.57 71.48V91.736H165.01V22.04ZM189.586 62.84C192.146 62.84 194.546 62.168 196.786 60.824C199.026 59.48 200.818 57.56 202.162 55.064C203.506 52.568 204.178 49.72 204.178 46.52C204.178 43.32 203.506 40.504 202.162 38.072C200.818 35.576 199.026 33.656 196.786 32.312C194.546 30.968 192.146 30.296 189.586 30.296C187.026 30.296 184.626 30.968 182.386 32.312C180.21 33.656 178.45 35.576 177.106 38.072C175.762 40.504 175.09 43.32 175.09 46.52C175.09 49.72 175.762 52.568 177.106 55.064C178.45 57.56 180.21 59.48 182.386 60.824C184.626 62.168 187.026 62.84 189.586 62.84Z"
          sda={240}
        />

        <Path
          d="M242.552 71.768C240.376 71.768 238.328 71.416 236.408 70.712C234.488 70.008 232.92 69.08 231.704 67.928C228.952 65.176 227.576 61.432 227.576 56.696V31.352H219.032V22.04H227.576V8.216H238.136V22.04H250.04V31.352H238.136V54.392C238.136 57.016 238.648 58.872 239.672 59.96C240.632 61.24 242.296 61.88 244.664 61.88C245.752 61.88 246.712 61.752 247.544 61.496C248.376 61.176 249.272 60.696 250.232 60.056V70.328C248.12 71.288 245.56 71.768 242.552 71.768Z"
          sda={206}
        />

        <Path
          d="M281.15 72.536C276.222 72.536 271.806 71.416 267.902 69.176C263.998 66.872 260.958 63.736 258.782 59.768C256.606 55.8 255.518 51.384 255.518 46.52C255.518 41.656 256.606 37.24 258.782 33.272C260.958 29.304 263.998 26.2 267.902 23.96C271.806 21.656 276.222 20.504 281.15 20.504C286.078 20.504 290.494 21.656 294.398 23.96C298.302 26.264 301.342 29.4 303.518 33.368C305.694 37.336 306.782 41.72 306.782 46.52C306.782 51.384 305.694 55.8 303.518 59.768C301.342 63.736 298.302 66.872 294.398 69.176C290.494 71.416 286.078 72.536 281.15 72.536ZM281.15 62.84C283.838 62.84 286.334 62.2 288.638 60.92C290.942 59.576 292.766 57.688 294.11 55.256C295.518 52.76 296.222 49.848 296.222 46.52C296.222 43.192 295.518 40.312 294.11 37.88C292.766 35.448 290.942 33.592 288.638 32.312C286.334 30.968 283.838 30.296 281.15 30.296C278.462 30.296 275.966 30.968 273.662 32.312C271.358 33.592 269.502 35.448 268.094 37.88C266.75 40.312 266.078 43.192 266.078 46.52C266.078 49.848 266.75 52.76 268.094 55.256C269.502 57.688 271.358 59.576 273.662 60.92C275.966 62.2 278.462 62.84 281.15 62.84Z"
          sda={163}
        />

        <Path
          d="M315.581 22.04H325.661V29.24H326.141C327.229 26.744 329.117 24.696 331.805 23.096C334.493 21.432 337.341 20.6 340.349 20.6C342.717 20.6 344.701 20.92 346.301 21.56V32.504C343.485 31.48 340.957 30.968 338.717 30.968C336.285 30.968 334.109 31.608 332.189 32.888C330.333 34.168 328.861 35.896 327.773 38.072C326.685 40.184 326.141 42.52 326.141 45.08V71H315.581V22.04Z"
          sda={167}
        />
      </svg>
    </div>
  );
}

export default Logo;

// <svg
//   width="349"
//   height="94"
//   viewBox="0 0 349 94"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M0.766525 53.9395L12.8218 49.0491L13.1171 50.1383C14.0973 53.7524 15.7992 56.6869 18.2074 58.9781C20.6393 61.1688 23.5312 62.264 26.936 62.264C30.1471 62.264 32.8098 61.4502 34.9794 59.8694C37.0831 58.2745 38.128 56.1444 38.128 53.376C38.128 50.848 37.1968 48.8249 35.313 47.2265L35.3006 47.216L35.2885 47.205C33.3932 45.4874 29.9341 43.6847 24.7762 41.8379L24.7749 41.8375L20.464 40.3047L20.4602 40.3034C15.7345 38.662 11.7349 36.2881 8.48378 33.1697C5.12402 29.9471 3.472 25.7044 3.472 20.544C3.472 16.9578 4.45647 13.6341 6.41543 10.5943C8.37309 7.55655 11.0699 5.1692 14.4783 3.43088C17.9629 1.62225 21.8667 0.727997 26.168 0.727997C32.3436 0.727997 37.3889 2.24035 41.1987 5.36792C44.9004 8.34357 47.4295 11.7581 48.7167 15.6198L49.0084 16.4948L37.4573 21.4126L37.1206 20.3718C36.4818 18.3974 35.257 16.6298 33.3974 15.0702C31.6294 13.5874 29.3126 12.808 26.36 12.808C23.4044 12.808 20.9668 13.558 18.9902 15.0094C17.1137 16.4331 16.224 18.193 16.224 20.352C16.224 22.403 17.0354 24.0725 18.7287 25.4271C20.5149 26.8561 23.3941 28.2827 27.4489 29.6769L27.4531 29.6783L31.7766 31.1194C37.7596 33.2005 42.4539 35.957 45.794 39.4278C49.2763 42.914 50.976 47.5693 50.976 53.28C50.976 57.939 49.7746 61.9352 47.32 65.208L47.3139 65.2161C44.9005 68.3669 41.8132 70.7142 38.0708 72.2518C34.4308 73.7736 30.6528 74.536 26.744 74.536C20.8381 74.536 15.5106 72.8058 10.7931 69.3508C6.05035 65.8772 2.79686 61.0081 1.01486 54.8041L0.766525 53.9395ZM37.688 71.328C41.272 69.856 44.216 67.616 46.52 64.608C48.824 61.536 49.976 57.76 49.976 53.28C49.976 47.776 48.344 43.392 45.08 40.128C41.88 36.8 37.336 34.112 31.448 32.064L27.128 30.624C23.032 29.216 20.024 27.744 18.104 26.208C16.184 24.672 15.224 22.72 15.224 20.352C15.224 17.856 16.28 15.808 18.392 14.208C20.568 12.608 22.864 7.5 26 7.5C29.136 7.5 32.056 12.64 34.04 14.304C35.734 15.7247 36.9614 17.3321 37.7222 19.1261C37.8525 19.4332 37.9691 19.7459 38.072 20.064L47.768 15.936C46.552 12.288 44.152 9.024 40.568 6.144C36.984 3.2 32.184 1.728 26.168 1.728C22.008 1.728 18.264 2.592 14.936 4.32C11.672 5.984 9.112 8.256 7.256 11.136C5.4 14.016 4.472 17.152 4.472 20.544C4.472 25.472 6.04 29.44 9.176 32.448C12.312 35.456 16.184 37.76 20.792 39.36L25.112 40.896C30.296 42.752 33.912 44.608 35.96 46.464C38.072 48.256 39.128 50.56 39.128 53.376C39.128 56.448 37.944 58.88 35.576 60.672C33.208 62.4 30.328 63.264 26.936 63.264C23.288 63.264 20.152 62.08 17.528 59.712C15.1894 57.4903 13.4916 54.7077 12.4348 51.3644C12.3348 51.048 12.2405 50.7265 12.152 50.4L1.976 54.528C3.704 60.544 6.84 65.216 11.384 68.544C15.928 71.872 21.048 73.536 26.744 73.536C30.52 73.536 34.168 72.8 37.688 71.328ZM69.5566 71.0434L69.5504 71.0398C65.5548 68.709 62.4195 65.5064 60.1568 61.4469L60.1521 61.4384L60.1475 61.4298C57.9503 57.3018 56.8623 52.6574 56.8623 47.52C56.8623 42.3829 57.9502 37.7678 60.1507 33.7002L60.1534 33.6952C62.4151 29.5711 65.5507 26.3334 69.5504 24.0002L69.5566 23.9966C73.6242 21.6628 78.1822 20.504 83.2063 20.504C88.736 20.504 93.5089 21.7563 97.4757 24.3113C101.429 26.8573 104.255 30.3213 105.932 34.681L106.281 35.5896L94.7659 40.378L94.3802 39.459C93.3592 37.0267 91.9064 35.2573 90.0425 34.0869C88.173 32.913 85.8165 32.296 82.9183 32.296C80.4768 32.296 78.2245 32.9181 76.1422 34.1662C74.135 35.4074 72.4935 37.1875 71.225 39.5419C70.0336 41.8074 69.4222 44.4574 69.4222 47.52C69.4222 50.5799 70.0325 53.2648 71.2275 55.5987C72.4957 57.9509 74.1364 59.7296 76.1424 60.9699C78.2247 62.2179 80.4768 62.84 82.9183 62.84C85.8408 62.84 88.2736 62.2022 90.2619 60.9749C92.3228 59.6785 93.8907 57.852 94.9663 55.4616L95.3714 54.5616L106.707 59.4851L106.295 60.4074C104.361 64.7422 101.418 68.1899 97.4757 70.7287C93.5089 73.2837 88.736 74.536 83.2063 74.536C78.1822 74.536 73.6242 73.3772 69.5566 71.0434ZM70.3423 56.064C69.0622 53.568 68.4222 50.72 68.4222 47.52C68.4222 44.32 69.0622 41.504 70.3423 39.072C71.6862 36.576 73.4463 34.656 75.6223 33.312C77.8623 31.968 80.2943 31.296 82.9183 31.296C88.9983 31.296 93.1263 33.888 95.3023 39.072L104.998 35.04C103.398 30.88 100.71 27.584 96.9342 25.152C93.1582 22.72 88.5823 21.504 83.2063 21.504C78.3423 21.504 73.9583 22.624 70.0543 24.864C66.2142 27.104 63.2063 30.208 61.0303 34.176C58.9183 38.08 57.8623 42.528 57.8623 47.52C57.8623 52.512 58.9183 56.992 61.0303 60.96C63.2063 64.864 66.2142 67.936 70.0543 70.176C73.9583 72.416 78.3423 73.536 83.2063 73.536C88.5823 73.536 93.1582 72.32 96.9342 69.888C100.432 67.6352 103.106 64.6409 104.956 60.9053C105.104 60.6082 105.246 60.3065 105.382 60L95.8786 55.8722C94.7266 58.4322 93.0303 60.416 90.7903 61.824C88.6143 63.168 85.9902 63.84 82.9183 63.84C80.2943 63.84 77.8623 63.168 75.6223 61.824C73.4463 60.48 71.6862 58.56 70.3423 56.064ZM119.399 72.4145L119.391 72.4102C116.485 70.9236 114.2 68.8488 112.562 66.1881L112.556 66.1785C110.92 63.4519 110.11 60.3917 110.11 57.024C110.11 51.6798 112.125 47.3808 116.159 44.2354L116.166 44.2304C120.214 41.1269 125.272 39.608 131.27 39.608C134.21 39.608 136.881 39.9013 139.276 40.4987C140.904 40.861 142.322 41.26 143.518 41.7006V40.704C143.518 37.9821 142.522 35.8367 140.52 34.178L140.514 34.1727L140.507 34.1673C138.482 32.4314 135.848 31.528 132.518 31.528C130.175 31.528 127.958 32.037 125.856 33.057C123.825 34.0734 122.197 35.4685 120.953 37.2455L120.355 38.1008L111.362 31.2101L111.932 30.4219C114.208 27.2747 117.156 24.8326 120.756 23.099C124.361 21.3635 128.351 20.504 132.71 20.504C139.97 20.504 145.716 22.3034 149.798 26.0437C153.893 29.7311 155.886 34.9237 155.886 41.472V73H143.518V68.4432C142.18 69.9398 140.525 71.2239 138.568 72.3002C135.841 73.8001 132.727 74.536 129.254 74.536C125.605 74.536 122.315 73.8386 119.407 72.4186L119.399 72.4145ZM143.518 66.8737C143.699 66.6353 143.873 66.3921 144.038 66.144H144.518V72H154.886V41.472C154.886 35.136 152.966 30.24 149.126 26.784C145.286 23.264 139.814 21.504 132.71 21.504C128.486 21.504 124.646 22.336 121.19 24C117.734 25.664 114.918 28 112.742 31.008L120.134 36.672C120.326 36.3974 120.527 36.1313 120.736 35.8736C121.99 34.3303 123.549 33.0924 125.414 32.16C127.654 31.072 130.022 30.528 132.518 30.528C136.038 30.528 138.918 31.488 141.158 33.408C143.398 35.264 144.518 37.696 144.518 40.704V43.2C144.21 43.0533 143.877 42.9099 143.518 42.7699C142.312 42.2993 140.822 41.8666 139.046 41.472C136.742 40.896 134.15 40.608 131.27 40.608C125.446 40.608 120.614 42.08 116.774 45.024C112.998 47.968 111.11 51.968 111.11 57.024C111.11 60.224 111.878 63.104 113.414 65.664C114.95 68.16 117.094 70.112 119.846 71.52C122.598 72.864 125.734 73.536 129.254 73.536C132.582 73.536 135.526 72.832 138.086 71.424C140.345 70.1814 142.156 68.6646 143.518 66.8737ZM139.084 50.4083L139.076 50.4063C137.245 49.918 135.316 49.672 133.286 49.672C129.419 49.672 126.794 50.4576 125.203 51.8294L125.195 51.836L125.188 51.8424C123.57 53.1807 122.766 54.9096 122.766 57.12C122.766 59.0589 123.495 60.636 124.998 61.9196C126.508 63.1462 128.505 63.8 131.078 63.8C133.472 63.8 135.598 63.2336 137.479 62.1161C139.379 60.9883 140.854 59.4829 141.918 57.5897C142.89 55.8633 143.418 54.0193 143.505 52.0451C142.236 51.3899 140.765 50.8421 139.084 50.4083ZM144.518 51.456C144.518 53.824 143.942 56.032 142.79 58.08C141.638 60.128 140.038 61.76 137.99 62.976C135.942 64.192 133.638 64.8 131.078 64.8C128.326 64.8 126.086 64.096 124.358 62.688C122.63 61.216 121.766 59.36 121.766 57.12C121.766 54.624 122.694 52.608 124.55 51.072C126.406 49.472 129.318 48.672 133.286 48.672C135.398 48.672 137.414 48.928 139.334 49.44C141.318 49.952 143.046 50.624 144.518 51.456ZM165.01 22.04H177.09V27.0932C178.471 25.4916 180.221 24.1076 182.323 22.9348C185.238 21.3078 188.512 20.504 192.122 20.504C196.717 20.504 200.902 21.6721 204.652 24.016C208.395 26.3551 211.329 29.5947 213.454 33.7089C215.652 37.7744 216.738 42.3865 216.738 47.52C216.738 52.6558 215.651 57.2988 213.455 61.4259C211.328 65.4793 208.393 68.6861 204.652 71.024C200.902 73.3679 196.717 74.536 192.122 74.536C188.512 74.536 185.238 73.7322 182.323 72.1052C180.313 70.9836 178.623 69.6841 177.271 68.2004L177.57 72.4448V93.736H165.01V22.04ZM176.09 65.664H176.57C176.752 65.9458 176.946 66.2223 177.151 66.4934C178.528 68.3154 180.414 69.8949 182.81 71.232C185.562 72.768 188.666 73.536 192.122 73.536C196.538 73.536 200.538 72.416 204.122 70.176C207.706 67.936 210.522 64.864 212.57 60.96C214.682 56.992 215.738 52.512 215.738 47.52C215.738 42.528 214.682 38.08 212.57 34.176C210.522 30.208 207.706 27.104 204.122 24.864C200.538 22.624 196.538 21.504 192.122 21.504C188.666 21.504 185.562 22.272 182.81 23.808C180.379 25.1649 178.472 26.7964 177.09 28.7027C176.908 28.9544 176.734 29.2108 176.57 29.472H176.09V23.04H166.01V92.736H176.57V72.48L176.09 65.664ZM202.287 39.5557L202.281 39.5461C201.015 37.1945 199.344 35.4131 197.272 34.1695C195.184 32.9167 192.961 32.296 190.586 32.296C188.213 32.296 185.992 32.9156 183.906 34.1661C181.898 35.408 180.255 37.1895 178.986 39.5461L178.981 39.5557C177.731 41.8185 177.09 44.4633 177.09 47.52C177.09 50.5761 177.731 53.2575 178.986 55.5899C180.255 57.9465 181.898 59.7281 183.906 60.97C185.993 62.2204 188.213 62.84 190.586 62.84C192.961 62.84 195.184 62.2193 197.272 60.9665C199.344 59.7229 201.015 57.9415 202.282 55.5899C203.537 53.2575 204.178 50.5761 204.178 47.52C204.178 44.4633 203.537 41.8185 202.287 39.5557ZM183.386 33.312C185.626 31.968 188.026 31.296 190.586 31.296C193.146 31.296 195.546 31.968 197.786 33.312C200.026 34.656 201.818 36.576 203.162 39.072C204.506 41.504 205.178 44.32 205.178 47.52C205.178 50.72 204.506 53.568 203.162 56.064C201.818 58.56 200.026 60.48 197.786 61.824C195.546 63.168 193.146 63.84 190.586 63.84C188.026 63.84 185.626 63.168 183.386 61.824C181.21 60.48 179.45 58.56 178.106 56.064C176.762 53.568 176.09 50.72 176.09 47.52C176.09 44.32 176.762 41.504 178.106 39.072C179.45 36.576 181.21 34.656 183.386 33.312ZM232.006 69.6447L231.997 69.6351C229.018 66.6563 222.5 69.9399 222.5 65L227.576 33.352H219.032V22.04H227.576V8.216H240.136V22.04H252.04V33.352H240.136L247.5 39.372C247.5 41.9176 240.642 59.4697 241.4 60.2746L241.438 60.3153L241.472 60.36C242.165 61.2844 243.453 61.88 245.664 61.88C246.661 61.88 247.507 61.7642 248.217 61.5501C248.955 61.2628 249.775 60.8255 250.677 60.2239L252.232 59.1875V71.9719L251.646 72.2384C249.371 73.2722 246.662 73.768 243.552 73.768C241.266 73.768 239.101 73.3978 237.063 72.6509C235.043 71.9101 233.35 70.9178 232.016 69.654L232.006 69.6447ZM248.544 62.496C247.712 62.752 246.752 62.88 245.664 62.88C243.296 62.88 241.632 62.24 240.672 60.96C239.648 59.872 236 44.624 236 42L239.136 32.352H251.04V23.04H239.136V9.216H228.576V23.04H220.032V32.352H228.576L236 64C236 68.736 229.952 66.176 232.704 68.928C233.92 70.08 235.488 71.008 237.408 71.712C239.328 72.416 241.376 72.768 243.552 72.768C246.56 72.768 249.12 72.288 251.232 71.328V61.056C250.89 61.2836 250.557 61.491 250.232 61.6781C249.643 62.0172 249.08 62.2898 248.544 62.496ZM268.405 71.0434L268.394 71.0373C264.336 68.642 261.168 65.3747 258.906 61.2488C256.643 57.1225 255.518 52.5391 255.518 47.52C255.518 42.5009 256.643 37.9175 258.906 33.7912C261.169 29.6646 264.338 26.4275 268.4 24.0957C272.469 21.695 277.062 20.504 282.15 20.504C287.241 20.504 291.836 21.6961 295.907 24.0988C299.965 26.494 303.133 29.7613 305.395 33.8872C307.657 38.0115 308.783 42.5624 308.783 47.52C308.783 52.5391 307.658 57.1225 305.395 61.2488C303.133 65.3747 299.965 68.642 295.907 71.0372L295.896 71.0434C291.827 73.3784 287.236 74.536 282.15 74.536C277.065 74.536 272.474 73.3784 268.405 71.0434ZM268.903 24.96C264.999 27.2 261.959 30.304 259.783 34.272C257.607 38.24 256.518 42.656 256.518 47.52C256.518 52.384 257.607 56.8 259.783 60.768C261.959 64.736 264.999 67.872 268.903 70.176C272.807 72.416 277.222 73.536 282.15 73.536C287.078 73.536 291.494 72.416 295.398 70.176C299.302 67.872 302.342 64.736 304.518 60.768C306.695 56.8 307.783 52.384 307.783 47.52C307.783 42.72 306.695 38.336 304.518 34.368C302.342 30.4 299.302 27.264 295.398 24.96C291.494 22.656 287.078 21.504 282.15 21.504C277.222 21.504 272.807 22.656 268.903 24.96ZM294.235 55.7723L294.239 55.7647C295.55 53.4413 296.223 50.7039 296.223 47.52C296.223 44.3354 295.55 41.6348 294.245 39.381L294.24 39.3724L294.235 39.3637C292.977 37.0865 291.284 35.3701 289.153 34.1862L289.144 34.1811L289.135 34.1758C286.985 32.9217 284.663 32.296 282.15 32.296C279.638 32.296 277.316 32.9217 275.166 34.1758L275.157 34.1811L275.148 34.1862C273.015 35.371 271.288 37.0901 269.965 39.372C268.721 41.6275 268.078 44.3318 268.078 47.52C268.078 50.7052 268.72 53.4445 269.968 55.7684C271.291 58.0489 273.02 59.8022 275.158 61.0512C277.307 62.2434 279.633 62.84 282.15 62.84C284.669 62.84 286.994 62.2433 289.144 61.0509C291.281 59.802 292.977 58.0501 294.235 55.7723ZM289.638 61.92C287.334 63.2 284.838 63.84 282.15 63.84C279.462 63.84 276.967 63.2 274.663 61.92C272.359 60.576 270.503 58.688 269.095 56.256C267.751 53.76 267.078 50.848 267.078 47.52C267.078 44.192 267.751 41.312 269.095 38.88C270.503 36.448 272.359 34.592 274.663 33.312C276.967 31.968 279.462 31.296 282.15 31.296C284.838 31.296 287.334 31.968 289.638 33.312C291.942 34.592 293.767 36.448 295.111 38.88C296.519 41.312 297.223 44.192 297.223 47.52C297.223 50.848 296.519 53.76 295.111 56.256C293.767 58.688 291.942 60.576 289.638 61.92ZM315.582 22.04H327.661V27.3403C328.831 25.7428 330.38 24.3774 332.287 23.241C335.122 21.4875 338.149 20.6 341.349 20.6C343.8 20.6 345.92 20.9302 347.673 21.6315L348.301 21.883V34.9317L346.96 34.4438C344.219 33.447 341.809 32.968 339.718 32.968C337.475 32.968 335.496 33.5541 333.751 34.7156C332.048 35.8919 330.685 37.4844 329.668 39.5192L329.663 39.53C328.653 41.4895 328.142 43.6667 328.142 46.08V73H315.582V22.04ZM333.189 33.888C335.109 32.608 337.286 31.968 339.718 31.968C341.689 31.968 343.884 32.3646 346.301 33.1579C346.631 33.2659 346.964 33.3813 347.301 33.504V22.56C345.701 21.92 343.717 21.6 341.349 21.6C338.341 21.6 335.494 22.432 332.806 24.096C330.505 25.4655 328.79 27.1633 327.661 29.1892C327.472 29.5302 327.298 29.8804 327.142 30.24H326.661V23.04H316.582V72H327.142V46.08C327.142 43.52 327.685 41.184 328.773 39.072C329.861 36.896 331.333 35.168 333.189 33.888Z"
//     fill="black"
//   />
// </svg>;
