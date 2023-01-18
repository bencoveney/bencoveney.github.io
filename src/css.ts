export function joinClasses(...names: (string | false | undefined)[]) {
  return names.filter((name) => !!name).join(" ");
}
