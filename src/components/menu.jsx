const menuList = [
  { label: "About", link: "/" },
  { label: "Work", link: "/#about" },
  { label: "Testimonials", link: "/#work" },
  { label: "Contact", link: "/#contact" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex gap-6 mt-3">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
