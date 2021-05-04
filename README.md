# Promises

### The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

#### Example - 1

Here's an example that shows how promises can be used in general.

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("1u3980938mnbjhb");
  } else {
    reject(new Error(404));
  }
});

promise
  .then((response) => console.log("the secret code is: ", response))
  .catch((error) => console.log("Error: ", error));

// Output:
// the secret code is:  1u3980938mnbjhb
```

Similarly, if value of success is false, then:

```javascript
const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("1u3980938mnbjhb");
  } else {
    reject(new Error("OOPs! Something went wrong!"));
  }
});

promise
  .then((response) => console.log("the secret code is: ", response))
  .catch((error) => console.log(error));
```

Output:
![error image](./src/assets/Images/Error.png)

#### Example - 2

```javascript
const someWork = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello JS"), 2000);
  });
};

const getData = async () => {
  const data = await someWork();
  console.group(data);
};

getData();
```

In the above example, the following output pops up after a timeout of 2 minutes(2000ms)

`hello JS`
