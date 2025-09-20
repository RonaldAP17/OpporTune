import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars";

function Nav() {
  return (
    <>
      <StarsBackground className="">
        <nav class="relative flex flex-col sm:flex-row sm:text-center items-center justify-between p-9 text-white shadow-lg">
          <div>
            <h1 class="text-xl font-bold">OpporTune</h1>
          </div>

          <ul class="flex sm:space-x-4 justify-center flex-col sm:flex-row text-center">
            <li>
              <a href="#" class="sm:p-4">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="sm:p-4">
                Applications
              </a>
            </li>
            <li>
              <a href="#" class="sm:p-4">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </StarsBackground>
    </>
  );
}

export default Nav;
