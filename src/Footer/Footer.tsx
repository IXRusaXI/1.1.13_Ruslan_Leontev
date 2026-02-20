import ClearCompletedButton from "../Buttons/ClearCompletedButton";
import Filters from "./Filters";
import TodoCounter from "../Text/TodoCounter";

function Footer() {
    return (
      <footer className="footer">
      <TodoCounter />
      <Filters />
      <ClearCompletedButton />
      </footer>
    );
}

export default Footer;