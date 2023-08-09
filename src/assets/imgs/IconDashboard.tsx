interface activeProps {
  active: number;
}

const IconDashboard: React.FC<activeProps> = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 9.08366V3.41699C18.3333 2.16699 17.8 1.66699 16.475 1.66699H13.1083C11.7833 1.66699 11.25 2.16699 11.25 3.41699V9.08366C11.25 10.3337 11.7833 10.8337 13.1083 10.8337H16.475C17.8 10.8337 18.3333 10.3337 18.3333 9.08366Z"
        stroke={active === 0 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 16.583V15.083C18.3333 13.833 17.8 13.333 16.475 13.333H13.1083C11.7833 13.333 11.25 13.833 11.25 15.083V16.583C11.25 17.833 11.7833 18.333 13.1083 18.333H16.475C17.8 18.333 18.3333 17.833 18.3333 16.583Z"
        stroke={active === 0 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 10.917V16.5837C8.75 17.8337 8.21666 18.3337 6.89166 18.3337H3.525C2.2 18.3337 1.66666 17.8337 1.66666 16.5837V10.917C1.66666 9.66699 2.2 9.16699 3.525 9.16699H6.89166C8.21666 9.16699 8.75 9.66699 8.75 10.917Z"
        stroke={active === 0 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 3.41699V4.91699C8.75 6.16699 8.21666 6.66699 6.89166 6.66699H3.525C2.2 6.66699 1.66666 6.16699 1.66666 4.91699V3.41699C1.66666 2.16699 2.2 1.66699 3.525 1.66699H6.89166C8.21666 1.66699 8.75 2.16699 8.75 3.41699Z"
        stroke={active === 0 ? "#FFF" : "#7E7D88"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconDashboard;
