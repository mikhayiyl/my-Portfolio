import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaEye, FaGithub } from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    maxWidth: "350px",
    height: "350px",
    margin: "20px",
    background: "pink",
    borderRadius: "20px",
  },
});

export default function AllProjectsCard({
  image,
  title,
  description,
  projectLink,
  gitLink,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            style={{ width: "150px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={projectLink}>
          <Button size="small" color="primary" className="btn btn-sm ">
            Open Site <FaEye className="m-1" style={{ fontSize: "1rem" }} />
          </Button>
        </a>
        <a href={gitLink}>
          <Button className="btn btn-sm " size="small" color="primary">
            View code <FaGithub className="m-1" style={{ fontSize: "1rem" }} />
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
