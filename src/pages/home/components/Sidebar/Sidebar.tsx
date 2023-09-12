import scss from './Sidebar.module.scss';

import dotSvg from './images/dot.svg';

function Sidebar() {
  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <img src={dotSvg} className={scss.dotSvg} />
        <p>Select Social Media</p>
      </div>
      <div className={scss.itemsContainer}>
        Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
        Item 1 <br /> Item2 <br />
      </div>
    </aside>
  );
}

export default Sidebar;