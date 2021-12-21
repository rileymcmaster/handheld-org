export const fetchWord = async () => {
  const result = await fetch(
    `https://random-word-form.herokuapp.com/random/noun`
  );
  const resultData = await result.json();
  return resultData;
};
