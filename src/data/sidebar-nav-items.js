const id = window.location.pathname.split("/").slice(-1)[0]

export default function() {
  return [
    {
      title: "Hero Dashboard",
      to: "/building-overview",
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
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: `/manage-building`,
    },
    
    {
      title: "Your current booking",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/add-new-parking",
    },
    {
      title: "Building now seeing",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: `/parking-slot/${id}`,
    },
    {
      title: "History order",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    }
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
