import axios from 'axios';

const equineService = { endpoint: 'http://localhost:5000/api/va' };

equineService.getAllByState = (payload) => {
  const config = {
    method: "POST",
    url: `${equineService.endpoint}/state`,
    data: {state: `${payload}`},
    headers: { Accept: 'application/json' }
  };
  return axios(config).then(r => r);
};
equineService.getEquineByState = (payload) => {
  const config = {
    method: "POST",
    url: `${equineService.endpoint}/state/equine`,
    data: {state: `${payload}`},
    headers: { Accept: 'application/json' }
  };
  return axios(config).then(r => r);
};

equineService.getByZip = (payload) => {
  axios
    .post(
      `${equineService.endpoint}/zip`,
      { state: `${payload}` },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    .then((r) => {
      console.log(r.data);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log('TEST');
};

export default equineService;
