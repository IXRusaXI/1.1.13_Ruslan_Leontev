import Checkbox from "../Inputs/Checkbox";
import Description from "../Text/Description";
import Created from "../Text/Created";
import Buttons from "../Buttons/Buttons";

function TodoItem() {
    return (
        <li>
        <Checkbox />
        <label>
          <Description />
          <Created />
        </label>
        <Buttons />
      </li>
    );
}

export default TodoItem;