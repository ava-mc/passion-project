import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Arrow({type, disabled, onPress}) {
  return (
    <div onClick={onPress}>
      {type === "back" && (
        <ArrowBackIcon
          sx={{ color: disabled ? "lightgrey" : "#000", fontSize: "5rem" }}
        ></ArrowBackIcon>
      )}
      {type === "forward" && (
        <ArrowForwardIcon
          sx={{ color: disabled ? "lightgrey" : "#000", fontSize: "5rem" }}
        ></ArrowForwardIcon>
      )}
    </div>
  );

}
