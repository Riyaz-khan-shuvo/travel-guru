import React from 'react';
import './TinySlider.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sundorbon from '../../Images/sundorbon.png'
import sajek from "../../Images/Sajek.png"
import srimongol from "../../Images/Sreemongol.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import $ from 'jquery'

const useStyles = makeStyles({

    root: {
        maxWidth: 345,
        background: 'none',
        color: "#fff",
        borderRadius: "3%"
    },
    media: {
        height: 475,

    },
});

const TinySlider = () => {
    const classes = useStyles();
    return (
        <div className="slider mt-5">
            <div className="container">
                <div className="row all-item">
                    <div className="col-md-3">
                        <div className="place-description">
                            <h1>Sundorbon</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dicta, voluptas corrupti sunt iure quod cumque suscipit consectetur earum eos aspernatur ipsum nam natus id!
                        </p>
                            <Link to="/destination/Sundorbon">
                            <button className="booking">Booking <FontAwesomeIcon icon={faArrowAltCircleRight} /> </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <Link to="/destination/Sundorbon">
                        <Card className="card-item" id="active">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sundorbon}
                                    title="Sundorbon"
                                />
                                <h3>Sundorbon</h3>
                            </CardActionArea>
                        </Card>
                        </Link>
                    </div>
                    <div className="col-md-3 ">
                        <Link to="/destination/Sajek">
                        <Card className="card-item">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sajek}
                                    title="Sajek"
                                />
                                <h3>Sajek</h3>
                            </CardActionArea>
                        </Card>
                        </Link>
                    </div>
                    <div className="col-md-3 ">
                        <Link to={`/destination/Srimongol`}>
                            <Card className="card-item">
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={srimongol}
                                        title="Sreemongol"

                                    />
                                    <h3>Srimongol</h3>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TinySlider;