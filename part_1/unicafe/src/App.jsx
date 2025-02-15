import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import StatisticsCard from "./components/StatisticsCard";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => setGood(good + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);
  const badFeedback = () => setBad(bad + 1);

  return (
    <div className='bg-red-100 h-screen p-8'>
      <Typography variant='h1' className='text-center p-3' color='white'>
        UniCafe Review Tracker
      </Typography>
      <div className='grid grid-cols-3 gap-4'>
        <StatisticsCard
          cardTitle={"Good Feedback"}
          cardRating={good}
          buttonTitle={"Give Good Feeback"}
          onClick={goodFeedback}
        />
        <StatisticsCard
          cardTitle={"Neutral Feedback"}
          cardRating={neutral}
          buttonTitle={"Give Neutral Feedback"}
          onClick={neutralFeedback}
        />
        <StatisticsCard
          cardTitle={"Bad Feedback"}
          cardRating={bad}
          buttonTitle={"Give Bad Feedback"}
          onClick={badFeedback}
        />

        <Card className='items-center'>
          <CardBody>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
              Total Feedback Count
            </Typography>
            <Typography>{good + neutral + bad}</Typography>
          </CardBody>
        </Card>
        <Card className='items-center'>
          <CardBody>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
              Average
            </Typography>
            <Typography>
              {good + neutral + bad > 0
                ? ((good - bad) / (good + neutral + bad)).toFixed(2)
                : "N/A"}
            </Typography>
          </CardBody>
        </Card>
        <Card className='items-center'>
          <CardBody>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
              Total Positive %
            </Typography>
            <Typography>
              {good + neutral + bad > 0
                ? ((good / (good + neutral + bad)) * 100).toFixed(2) + "%"
                : "0%"}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
