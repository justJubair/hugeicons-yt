import useTheme from "./hooks/useTheme";

const App = () => {
  const theme = useTheme(import.meta.env.VITE_THEME);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        style={{ background: theme.background }}
        className=" w-80 rounded-xl p-8"
      >
        <div className="mb-8 mt-2">{theme.Logo}</div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Home</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M2 6L6 6.00003"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 13H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 21H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.4 13.4L22 16M20.7 8.85C20.7 5.6191 18.0809 3 14.85 3C11.6191 3 9 5.6191 9 8.85C9 12.0809 11.6191 14.7 14.85 14.7C18.0809 14.7 20.7 12.0809 20.7 8.85Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Explore</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Notification</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Message</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M19.7502 11V10C19.7502 6.22876 19.7502 4.34315 18.5786 3.17157C17.407 2 15.5214 2 11.7502 2H10.7503C6.97907 2 5.09346 2 3.92189 3.17156C2.75032 4.34312 2.7503 6.22872 2.75027 9.99993L2.75024 14C2.7502 17.7712 2.75019 19.6568 3.92172 20.8284C5.09329 21.9999 6.97897 22 10.7502 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.25024 7H15.2502M7.25024 12H15.2502"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.2502 20.8268V22H14.4236C14.833 22 15.0377 22 15.2217 21.9238C15.4058 21.8475 15.5505 21.7028 15.84 21.4134L20.6636 16.5894C20.9366 16.3164 21.0731 16.1799 21.1461 16.0327C21.285 15.7525 21.285 15.4236 21.1461 15.1434C21.0731 14.9961 20.9366 14.8596 20.6636 14.5866C20.3905 14.3136 20.254 14.1771 20.1067 14.1041C19.8265 13.9653 19.4975 13.9653 19.2173 14.1041C19.0701 14.1771 18.9335 14.3136 18.6605 14.5866L18.6605 14.5866L13.8369 19.4106C13.5474 19.7 13.4027 19.8447 13.3265 20.0287C13.2502 20.2128 13.2502 20.4174 13.2502 20.8268Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Article</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Bookmark</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M2.9668 10.4961V15.4979C2.9668 18.3273 2.9668 19.742 3.84548 20.621C4.72416 21.5001 6.13837 21.5001 8.9668 21.5001H14.9668C17.7952 21.5001 19.2094 21.5001 20.0881 20.621C20.9668 19.742 20.9668 18.3273 20.9668 15.4979V10.4961"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.9668 16.9932C14.2827 17.6004 13.1936 17.9932 11.9668 17.9932C10.74 17.9932 9.65089 17.6004 8.9668 16.9932"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.1038 8.41848C9.82182 9.43688 8.79628 11.1936 6.84777 11.4482C5.12733 11.673 3.82246 10.922 3.48916 10.608C3.12168 10.3534 2.28416 9.53872 2.07906 9.02952C1.87395 8.52032 2.11324 7.41706 2.28416 6.96726L2.96743 4.98888C3.13423 4.49196 3.5247 3.31666 3.92501 2.91913C4.32533 2.5216 5.13581 2.5043 5.4694 2.5043H12.4749C14.2781 2.52978 18.2209 2.48822 19.0003 2.50431C19.7797 2.52039 20.2481 3.17373 20.3848 3.45379C21.5477 6.27061 22 7.88382 22 8.57124C21.8482 9.30456 21.22 10.6873 19.0003 11.2955C16.6933 11.9275 15.3854 10.6981 14.9751 10.2261M9.15522 10.2261C9.47997 10.625 10.4987 11.4279 11.9754 11.4482C13.4522 11.4686 14.7273 10.4383 15.1802 9.92062C15.3084 9.76786 15.5853 9.31467 15.8725 8.41848"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Store</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>Communities</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={theme.iconColor}
              fill={"none"}
            >
              <path
                d="M11.9959 12H12.0049"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9998 12H16.0088"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99981 12H8.00879"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <p style={{ color: theme.iconColor }}>More</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
