export const addImage = (imgSrc, callback) => {
  // put your code here
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    //const { width, height } = imgElem;
    //callback(null, { width, height });
    //or
    callback(null, imgElem);
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};
const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
//addImage(imgSrc, onImageLoaded);
// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
/*export const pinger = (count, period) => {
  // put your code here
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);

};*/
export const addImage = (imgSrc) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => rejectCb(new Error('Image load is failed...')));
  });
  return p;
};
const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(imgSrc);
//resultPromise.then(data => console.log(data));
resultPromise.catch((error) => console.log(error));
console.log(resultPromise);

export const requestUserData = (userId) => {
  // put your code here
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}@example.com`,
          userId: `${userId}`,
        });
      }, 1000);
    }
  });
  return request;
};
requestUserData('broken')
  .catch((error) => {
    console.log(error);
  })
  .then((data) => console.log(data))
  .finally(() => console.log('finally'));

const serverResponsePromise = new Promise((resolve) => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then((response) => {
    /* ...code here */
    return response.json();
  })
  .then((result) => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log('!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!');

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getSum = (numbers) => numbers.filter((value) => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

const getRandomNumber = (from, to) => {
  from + Math.random() * (to - from);
};
const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];
export const getUserASAP = (userId) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);
  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};

getUserASAP('user-id-1').then((res) => console.log(res));
