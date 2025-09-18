function Nav() {
    return (
            <nav
      class="flex flex-col sm:flex-row sm:text-center items-center justify-between p-6 bg-main-blue text-white shadow-lg mb-3"
    >
      <div>
        <h1 class="text-xl font-bold mb-3">OpporTune</h1>
      </div>

      <ul
        class="flex sm:space-x-4 justify-center flex-col sm:flex-row text-center"
      >
        <li><a href="#" class="sm:p-4">Inicio</a></li>
        <li><a href="#" class="sm:p-4">Trabajos</a></li>
        <li><a href="#" class="sm:p-4">Contacto</a></li>
      </ul>
    </nav>
    );
}

export default Nav;