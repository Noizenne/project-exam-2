import { Link } from "react-router-dom";
import { StyledFooter } from "../../../styles/Footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <StyledFooter>
      <Link to="/">
        <img src="/blueLogo.png" alt="Holidaze logo" />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact us</Link>
      <div className="socialsContainer">
        <FacebookIcon fontSize="large" sx={{ color: "blue" }}/>
        <InstagramIcon fontSize="large" sx={{ color: "blue" }}/>
      </div>
      <p>&copy; Holidaze</p>
    </StyledFooter>
  )
}
