interface activeProps {
  active: number;
}

const IconCapso: React.FC<activeProps> = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_83524_4512)">
        <g clip-path="url(#clip1_83524_4512)">
          <path
            d="M1.66663 14.167L9.99996 18.3337L18.3333 14.167"
            stroke={active === 3 ? "#FFF" : "#7E7D88"}
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66663 10L9.99996 14.1667L18.3333 10"
            stroke={active === 3 ? "#FFF" : "#7E7D88"}
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99996 1.66699L1.66663 5.83366L9.99996 10.0003L18.3333 5.83366L9.99996 1.66699Z"
            stroke={active === 3 ? "#FFF" : "#7E7D88"}
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_83524_4512">
          <rect width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_83524_4512">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCapso;
