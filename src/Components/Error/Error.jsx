import React from "react";
import { Error } from "@mui/icons-material";
import { StyledError } from "../../styles/Error.styles";

function ErrorMessage() {
  return (
    <StyledError>
      <Error fontSize="large" />
      There's been an error.
    </StyledError>
  );
}

export default ErrorMessage;
