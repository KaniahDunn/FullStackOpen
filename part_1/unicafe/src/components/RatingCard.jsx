import React from "react";
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";

function RatingsCard({ cardTitle, cardRating, buttonTitle, onClick }) {
  return (
    <div>
      <Card className='items-center'>
        <CardBody>
          <Typography variant='h5' color='blue-gray' className='mb-2'>
            {cardTitle}
          </Typography>
          <Typography>{cardRating}</Typography>
        </CardBody>
        <CardFooter>
          <Button color='pink' onClick={onClick}>
            {buttonTitle}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RatingsCard;
