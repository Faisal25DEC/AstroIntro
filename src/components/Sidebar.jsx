import SidebarAccordion from "./SidebarAccordion.astro";

const Sidebar = ({ navItems }) => {
  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <SidebarAccordion item={item} index={index} />
    ));
  };
  return navItems.map((item, index) => (
    <SidebarAccordion item={item} index={index} />
  ));
};

export default Sidebar;
