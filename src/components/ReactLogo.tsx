import reactLogo from '../assets/reactLogo.png';

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt="React Logo"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '70px',
        zIndex: 999
      }}
    />
  );
};
