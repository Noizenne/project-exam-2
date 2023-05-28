import Carousel from "react-material-ui-carousel";

import { CardMedia, ImageListItem } from "@mui/material";

function CarouselSlider({ media }) {
  return (
    <Carousel
      sx={{
        maxWidth: 400,
        maxHeight: 300,
      }}
    >
      {media &&
        media.map((item) => (
          <ImageListItem key={item}>
            <CardMedia
              className="cImg"
              image={item}
              alt={item}
              sx={{ height: 300, borderRadius: 5 }}
            />
          </ImageListItem>
        ))}
    </Carousel>
  );
}

export default CarouselSlider;
