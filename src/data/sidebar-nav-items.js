export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Building Nearly",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/building",
    },
    {
      title: "Manage your building",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: `/manage/building`,
    },
    
    {
      title: "Add New Parking",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-parking",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
