interface activeProps {
  active: number;
}

const IconChat: React.FC<activeProps> = ({ active }) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.5801"
        cy="14.4026"
        r="0.708276"
        fill={active === 2 ? "#FFF" : "#7E7D88"}
      />
      <circle
        cx="6.94094"
        cy="14.4016"
        r="0.708276"
        fill={active === 2 ? "#FFF" : "#7E7D88"}
      />
      <circle
        cx="9.3019"
        cy="14.4016"
        r="0.708276"
        fill={active === 2 ? "#FFF" : "#7E7D88"}
      />
      <g clipPath="url(#clip0_83524_4498)">
        <path
          d="M13.0697 5.19043C13.5212 5.19043 13.9317 5.31846 14.2862 5.60012C14.9579 6.1415 15.0549 7.05966 14.4915 7.71078C14.3161 7.91562 14.1071 8.09852 13.9093 8.28142C13.663 8.50822 13.4839 8.7533 13.4988 9.11178C13.51 9.3715 13.2899 9.54342 13.0324 9.53611C12.7898 9.52513 12.6219 9.33858 12.6107 9.07886C12.5883 8.60332 12.7562 8.20094 13.0846 7.86075C13.3085 7.62664 13.5548 7.41814 13.775 7.18037C14.0772 6.85847 14.0101 6.4378 13.622 6.21466C13.5026 6.14516 13.357 6.09761 13.2152 6.07932C12.7674 6.02445 12.3644 6.15979 12.1927 6.72678C12.1218 6.96821 11.8718 7.09258 11.6404 7.02308C11.3979 6.95357 11.271 6.72312 11.3382 6.47072C11.5397 5.68791 12.2077 5.19409 13.0697 5.19043Z"
          fill={active === 2 ? "#FFF" : "#7E7D88"}
        />
        <path
          d="M13.0732 9.98947C13.327 9.99679 13.5136 10.1907 13.5061 10.4321C13.4987 10.6808 13.2934 10.8637 13.0359 10.8528C12.7896 10.8418 12.6031 10.6443 12.6142 10.4028C12.6217 10.1614 12.8195 9.98216 13.0732 9.98947Z"
          fill={active === 2 ? "#FFF" : "#7E7D88"}
        />
      </g>
      <path
        d="M21 8.18601C21 10.0609 19.9887 11.7464 18.3785 12.9193C18.3228 12.9583 18.2921 13.0251 18.2893 13.092L18.2197 14.9168C18.2113 15.1619 17.9411 15.304 17.7349 15.1731L16.1888 14.2008C16.1888 14.2008 16.1888 14.2008 16.186 14.2008C16.0968 14.1423 15.9882 14.1256 15.8879 14.1562C14.9685 14.4431 13.9684 14.6019 12.9209 14.6019C12.907 14.6019 12.893 14.6019 12.8791 14.6019C12.907 14.4181 12.9209 14.2314 12.9209 14.042C12.9209 11.426 10.252 9.30594 6.95906 9.30594C6.28209 9.30594 5.63297 9.39509 5.02564 9.55946C4.90306 9.1165 4.83899 8.65404 4.83899 8.18044C4.83899 4.63398 8.45509 1.76172 12.9181 1.76172C17.3839 1.76729 21 4.64234 21 8.18601Z"
        stroke={active === 2 ? "#FFF" : "#7E7D88"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M5.02842 9.56445C2.68547 10.2024 1 11.9687 1 14.047C1 15.4288 1.74662 16.6741 2.93342 17.5405C2.97521 17.5711 2.99749 17.6185 3.00028 17.6686L3.05042 19.0142C3.056 19.1953 3.25658 19.2984 3.40981 19.2037L4.55203 18.4849C4.56038 18.4793 4.57153 18.471 4.57989 18.4654C4.62167 18.432 4.67739 18.4208 4.72754 18.4376C5.41844 18.6604 6.17064 18.783 6.96183 18.783C10.0152 18.783 12.5336 16.9582 12.8819 14.6069"
        stroke={active === 2 ? "#FFF" : "#7E7D88"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <defs>
        <clipPath id="clip0_83524_4498">
          <rect
            width="3.54138"
            height="5.66621"
            fill="white"
            transform="translate(11.3193 5.18945)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconChat;
