import NavSection from "./nav-sections";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <h1 className="text-3xl font-bold">TOM</h1>
      <NavSection />
    </header>
  );
};

export default Header;
