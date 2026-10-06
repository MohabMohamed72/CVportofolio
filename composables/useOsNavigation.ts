export const osNavigation = [
  { label: "Home", path: "/", file: "DESKTOP.SYS", icon: "home" },
  { label: "About", path: "/about", file: "PROFILE.SYS", icon: "profile" },
  { label: "Skills", path: "/skills", file: "SKILLS.PKG", icon: "code" },
  {
    label: "Projects",
    path: "/projects",
    file: "PROJECTS.APP",
    icon: "folder",
  },
  { label: "Stores", path: "/stores", file: "STORES.APP", icon: "store" },
  {
    label: "Experience",
    path: "/experience",
    file: "WORK_HISTORY.LOG",
    icon: "history",
  },
  { label: "Contact", path: "/contact", file: "CONTACT.EXE", icon: "mail" },
  { label: "CV", path: "/cv", file: "MOHAB_CV.PDF", icon: "file" },
] as const;
export function useOsNavigation() {
  const route = useRoute();
  const active = computed(
    () =>
      osNavigation.find((item) =>
        item.path === "/"
          ? route.path === "/"
          : route.path.startsWith(item.path),
      ) || osNavigation[0],
  );
  return { items: osNavigation, active };
}
