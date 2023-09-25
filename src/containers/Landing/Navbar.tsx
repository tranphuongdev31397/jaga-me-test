import Drawer from "@/components/Drawer";
import Logo from "@/components/Logo";
import MenuBar from "@/components/MenuBar";
import { Button } from "@/components/ui/button";
import { useViewport } from "@/contexts/ViewportProvider";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { width } = useViewport();

  useEffect(() => {
    if (width > 1024) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <>
      <section className="container flex justify-between">
        <div className="sm:ml-6">
          <Logo />
        </div>

        <div className="nav__action flex items-center">
          <div className="lg:block hidden">
            <MenuBar />
          </div>

          <button
            className="lg:hidden block mr-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={30} />
          </button>

          <Button
            className="min-w-[145px] xs:block hidden"
            textStyle={"underline"}
          >
            <a
              className="w-full"
              href="https://jagausers.au.auth0.com/login?state=hKFo2SBBX1IyZzQyeG80SUVoenNvT3RDengxaUZqTGVFcHlwQqFupWxvZ2luo3RpZNkgUmlwQldKbkpVTmNDWjRVUzZQZWxpTTJoWDRnRUhDVk6jY2lk2SBFb1RnbmFoMXNsUE1oVjVLQ2lDNTZaRVRVdXkwMXF4Qg&client=EoTgnah1slPMhV5KCiC56ZETUuy01qxB&protocol=oauth2&audience=https%3A%2F%2Fjagausers.au.auth0.com%2Fuserinfo&scope=openid%20profile%20email&response_mode=query&response_type=code&redirect_uri=https%3A%2F%2Fmy.jaga-me.com%2Fauth0%2Fcallback"
              target="_blank"
            >
              Login
            </a>
          </Button>
        </div>
      </section>
      {createPortal(
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="flex flex-col mt-[100px]  gap-10 px-5">
            <MenuBar
              className="flex-col gap-10 "
              classNameItem="w-full justify-between"
            />

            <Button className=" min-w-[145px]" textStyle={"underline"}>
              <a
                className="w-full"
                href="https://jagausers.au.auth0.com/login?state=hKFo2SBBX1IyZzQyeG80SUVoenNvT3RDengxaUZqTGVFcHlwQqFupWxvZ2luo3RpZNkgUmlwQldKbkpVTmNDWjRVUzZQZWxpTTJoWDRnRUhDVk6jY2lk2SBFb1RnbmFoMXNsUE1oVjVLQ2lDNTZaRVRVdXkwMXF4Qg&client=EoTgnah1slPMhV5KCiC56ZETUuy01qxB&protocol=oauth2&audience=https%3A%2F%2Fjagausers.au.auth0.com%2Fuserinfo&scope=openid%20profile%20email&response_mode=query&response_type=code&redirect_uri=https%3A%2F%2Fmy.jaga-me.com%2Fauth0%2Fcallback"
                target="_blank"
              >
                Login
              </a>
            </Button>

            <button
              className="absolute top-5 left-5"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
        </Drawer>,
        document.body
      )}
    </>
  );
}
