interface activeProps {
  active: number;
}

const IconMonitor: React.FC<activeProps> = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.36663 1.66699H14.625C17.5916 1.66699 18.3333 2.40866 18.3333 5.36699V10.642C18.3333 13.6087 17.5916 14.342 14.6333 14.342H5.36663C2.40829 14.3503 1.66663 13.6087 1.66663 10.6503V5.36699C1.66663 2.40866 2.40829 1.66699 5.36663 1.66699Z"
        stroke={active === 1 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14.3496V18.3329"
        stroke={active === 1 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66663 10.833H18.3333"
        stroke={active === 1 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 18.333H13.75"
        stroke={active === 1 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconMonitor;
