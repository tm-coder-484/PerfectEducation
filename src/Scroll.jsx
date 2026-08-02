import { useEffect } from "react";
import { useLocation } from "react-router";
// I was wondering why the page doesn't scroll to top, I googled it and apparently you need something to do it for you
export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
