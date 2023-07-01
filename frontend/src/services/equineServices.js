import axios from 'axios';

const equineService = { endpoint: "http://localhost:5000/api/va"}

equineService.getByState = (payload) => {
  axios.post(`${equineService.endpoint}/state`, {state: `${payload}`},
  {
    headers: {
      Accept: 'application/json',
    },
  }).then(r => {
    console.log(r.data);
  }).catch(err => {
    console.error(err);
  });
  console.log('TEST');
};

equineService.getByZip = (payload) => {
  axios.post(`${equineService.endpoint}/zip`, {state: `${payload}`},
  {
    headers: {
      Accept: 'application/json',
    },
  }).then(r => {
    console.log(r.data);
  }).catch(err => {
    console.error(err);
  });
  console.log('TEST');
};

export default equineService;