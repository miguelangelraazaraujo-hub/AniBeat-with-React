import './SidebarItems.css';
import { useTranslation } from 'react-i18next';


const SidebarItems = ({ item }) => {

  const { t } = useTranslation();

  return (
    <div className="sidebar-item">
      <a href={item.url} className="sidebar-item-link">
        <div
          className="sidebar-item-image"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.title}
        />
        <div className="sidebar-item-meta">
          <div className="sidebar-item-title-container">
            <div className="sidebar-item-title u-ellipsis-overflow">{item.title}</div>
          </div>
          <div className="sidebar-item-artist u-ellipsis-overflow">{item.artist}</div>
          <div className="sidebar-item-creator u-ellipsis-overflow">
            {t('por')} {item.creator}
            {item.time && <span className="sidebar-item-time"> • {item.time}</span>}
            {item.likes && <span className="sidebar-item-likes"> ❤️ {item.likes}</span>}
          </div>
        </div>
        <div className="sidebar-item-chevron">
          <i className="fas fa-chevron-right"></i>
        </div>
      </a>
    </div>
  );
};

export default SidebarItems;