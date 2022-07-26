import { useEffect } from "react";

export function useTitle(title: string) {
  return useEffect(() => {
    document.title = title;
  });
}