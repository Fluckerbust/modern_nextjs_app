import { IconChecklist, IconFileDollar, IconHome, IconShovel, IconTrees, IconUsers } from "@tabler/icons-react";
import {
    IconUserCircle,
    IconListCheck,
    IconLogin,
    IconCalendar,
    IconUserShield,
    IconSteeringWheel,
  } from "@tabler/icons-react";
  
  import { uniqueId } from "lodash";
  
  const Menuitems = [
    
  
    {
      id: uniqueId(),
      title: "Jobs",
      icon: IconTrees,
      href: "/Admin/jobs",
    },
   
    {
      id: uniqueId(),
      title: "Services",
      icon: IconChecklist,
      href: "/Admin/services",
    },
    {
      id: uniqueId(),
      title: "Materials",
      icon: IconShovel,
      href: "/Admin/materials",
    }, 
    {
      id: uniqueId(),
      title: "Customers",
      icon: IconHome,
      href: "/Admin/customers",
    },
    {
      id: uniqueId(),
      title: "Users",
      icon: IconUsers,
      href: "/Admin/users",
    },
    {
        id: uniqueId(),
        title: "Finance",
        icon: IconFileDollar,
        href: "/Admin/finance",
      },
    
    
    
  ];
  
  export default Menuitems;
  