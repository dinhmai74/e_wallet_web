import React from "react";
import { AppCard, AppCardContent } from "components/AppCard";
import { images } from "theme";
import { makeStyles } from "@material-ui/core/styles";
import colors from "theme/color/_colors.scss";
import { Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    boxShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: 10,
    backgroundColor: colors.white,
    maxWidth: 345,
    marginRight: 60,
    marginBottom: 30
  },
  media: {
    height: 0,
    paddingTop: "60%" // 16:9
  }
}));

export const ChooseProvider: React.FC = () => {
  const classes = useStyles();
  return (
    <div
      className=" d-flex flex-wrap px-40 py-10 mb-64  justify-center "
      style={{ backgroundColor: "#f2f5fa" }}
    >
      <p className="`text__h2 color__steel font-bold">Choose Provider:</p>
      <div className="flex flex-row  py-10 flex-wrap ">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={images.iconProvider.viettel}
          />
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={images.iconProvider.viettel}
          />
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={images.iconProvider.viettel}
          />
        </Card>
      </div>
    </div>
  );
};
