import { Link } from "react-router-dom";
import { StyledFooter } from "../../../styles/Footer.styles";

export default function Footer() {
    return (
      <StyledFooter>
        <Link to="/"><img src="/logo.jpg" alt="Holidaze logo"/></Link>
        <h4>About</h4>
        <h4>Contact us</h4>
        <p>&copy; Holidaze</p>
      </StyledFooter>
    )
}