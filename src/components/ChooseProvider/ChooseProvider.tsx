import React from "react";
import { images } from "theme";
import { makeStyles } from "@material-ui/core/styles";
import colors from "theme/color/_colors.scss";
import { Card, CardMedia } from "@material-ui/core";
import { AppButton } from "components/AppButton";
import { Paths } from "router/PrimaryRouters";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    boxShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginRight: 50
  },
  media: {
    height: 0,
    paddingTop: "60%" // 16:9
  }
}));

export const ChooseProvider: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div
      className=" d-flex flex-wrap  px-10 py-10 mb-64  justify-center "
      style={{ backgroundColor: "#f2f5fa" }}
    >
      <p className="`text__h2 color__steel font-bold pl-16">Choose Provider:</p>
      <div className="flex flex-row  py-10 px-12 flex-wrap ">
        <Card
          className={classes.card}
          onClick={() => {
            history.push(Paths.buyPhoneCardDetail);
          }}
        >
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
