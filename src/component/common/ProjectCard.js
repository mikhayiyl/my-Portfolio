import React from "react";
import {
  FaStar,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaStarHalf,
  FaRegStar,
} from "react-icons/fa";
import {
  Button,
  Card,
  CardBox,
  CardIcons,
  MediaIcons,
  Profession,
  ProName,
  Rating,
  RatingIcon,
  CardImgBox,
  CardContent,
  CardImg,
} from "./SwiperStyles";
const ProjectCard = ({ title, projectLink, gitLink, image }) => {
  return (
    <CardBox>
      <div className="swiper-wrapper content">
        <Card>
          <CardContent>
            <CardImgBox>
              <CardImg src={image} alt="img" />
            </CardImgBox>

            <CardIcons>
              <MediaIcons>
                <a href="https://www.facebook.com/people/%EF%BB%A3%EF%BB%B4%EF%BA%A8%EF%BA%8E%EF%BA%8B%EF%BB%B4%EF%BB%9E-%D9%83%D9%84%D8%A7%D8%B1%D9%83-%EF%BA%83%EF%BB%93%EF%BB%80%EF%BB%9E-%EF%BA%8D%EF%BB%9F%EF%BA%98%EF%BA%A4%EF%BA%8E%EF%BB%B3%EF%BA%8E/100015290027835/">
                  <FaFacebook />
                </a>
              </MediaIcons>
              <MediaIcons>
                <a
                  href="https://twitter.com/Devine14Michael
"
                >
                  <FaTwitter />
                </a>
              </MediaIcons>
              <MediaIcons>
                <a
                  href="https://github.com/mikhayiyl
"
                >
                  <FaGithub />
                </a>
              </MediaIcons>
            </CardIcons>

            <Profession>
              <ProName>{title}</ProName>
            </Profession>
            <Rating>
              <RatingIcon>
                <FaStar />
              </RatingIcon>
              <RatingIcon>
                <FaStar />
              </RatingIcon>
              <RatingIcon>
                <FaStar />
              </RatingIcon>
              <RatingIcon>
                <FaStarHalf />
              </RatingIcon>
              <RatingIcon>
                <FaRegStar />
              </RatingIcon>
            </Rating>
            <Button>
              <a href={projectLink} className="btn btn-primary btn-sm m-1">
                Previev
              </a>
              <button href={gitLink} className="btn btn-secondary btn-sm m-1">
                Github
              </button>
            </Button>
          </CardContent>
        </Card>
      </div>
    </CardBox>
  );
};

export default ProjectCard;
