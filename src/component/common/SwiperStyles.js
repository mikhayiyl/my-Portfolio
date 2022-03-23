import styled from "styled-components";

export const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  top: 20vh;
`;

// Project slider
export const CardBox = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;
export const CardImgBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 3px;
  background: #7d2ae8;
`;
export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const Card = styled.div`
  border-radius: 20px;
  background: #fff;
  position: relative;
  width: 300px;

  &::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
    background: #7d2ae8;
    border-radius: 20px 20px 0 0;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
`;

export const CardIcons = styled.div`
  position: absolute;
  top: 10px;
  font-size: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MediaIcons = styled.div`
  color: #fff;
  opacity: 0.6;
  margin-top: 10px;
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
export const Profession = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;
export const ProName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: red;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;
export const RatingIcon = styled.div`
  color: #7d2ae8;
  font-size: 20px;
  margin: 0 2px;
  cursor: pointer;
`;
export const Button = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
`;
