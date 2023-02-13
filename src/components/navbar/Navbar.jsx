import "./navbar.css"

function Navbar() {
  return <>
    <nav>
        <ul>
            <li>
                <a href="#/">Home</a>
                <a href="#">Blog</a>
                <a href="#">Categories</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </li>
            <i id="nemo" class="fa-solid fa-bars"></i>
        </ul>
    </nav>
  </>;
}
export default Navbar;
