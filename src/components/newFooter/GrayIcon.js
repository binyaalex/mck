import { Link } from "react-router-dom";

const GrayIcon = ({ img, i, url, link, title }) => {

  let cn = "grayIconLink"
  if (url === '/' && i === 0) {
    cn = 'grayIconLink chosen'
  } else if (url === '/notifications' && i === 1) {
    cn = 'grayIconLink chosen'
  } else if (url === '/wallet' && i === 2) {
    cn = 'grayIconLink chosen'
  }

  return (
    <Link to={link} className={cn}>
      {img}
      <div className="grayIconTitle">{title}</div>
    </Link>
  );
};

export default GrayIcon;
