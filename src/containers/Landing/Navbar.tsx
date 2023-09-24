import Logo from "@/components/Logo";
import MenuBar from "@/components/MenuBar";
import { Button } from "@/components/ui/button";

export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <section className="container flex justify-between">
      <div className="sm:ml-6">
        <Logo />
      </div>

      <div className="nav__action flex items-center">
        <div className="lg:block hidden">
          <MenuBar />
        </div>

        <Button className="min-w-[145px]" textStyle={"underline"}>
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
  );
}
