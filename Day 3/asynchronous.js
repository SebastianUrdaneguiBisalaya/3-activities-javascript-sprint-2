// Exercises
// 1. Callaback function
function getUserData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      const data = {
        name: "Sebastian",
        age: 23,
      };
      callback(null, data);
    } else {
      const error = "Fetch data failed!";
      callback(error, null);
    }
  }, 5000);
}

getUserData((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// 2. Promises
const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        const data = {
          name: "Sebastian",
          age: 23,
        };
        resolve(data);
      } else {
        reject("Failed! 🔥");
      }
    }, 2000);
  });
};

getUserData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Chaining Promises
const getPostsByUser = (dataName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        const post = {
          name: dataName,
          message: "Feliz día de la programación! 💯",
        };
        resolve(post);
      } else {
        reject("Failed! 🔥");
      }
    }, 1000);
  });
};

getUserData()
  .then((data) => {
    console.log(data.name);
    return getPostsByUser(data.name);
  })
  .then((postData) => {
    console.log(postData);
  })
  .catch((error) => {
    console.log(error);
  });

// 4. & 5.
const random = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        const data = {
          name: "Sebastian",
          age: 23,
        };
        resolve(data);
      } else {
        reject("Error! Failed!");
      }
    }, 2000);
  });
};

async function fetchAndDisplayData() {
  try {
    const data = await random();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchAndDisplayData();
