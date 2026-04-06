import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./Buttons.css";

library.add(fas, far, fab);

const Icones = ({ style = "solid", icone, id, iconClass }) => {
  let prefix = "fas";
  if (style === "regular") prefix = "far";
  if (style === "brand") prefix = "fab";

  return (
    <FontAwesomeIcon icon={[prefix, icone]} className={iconClass} id={id} />
  );
};

export default Icones;
