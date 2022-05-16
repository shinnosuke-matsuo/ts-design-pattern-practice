const greeter = (person: string) => {
  return "Hello, " + person;
};

export const main = () => {
  const user = "World.";

  console.log(greeter(user));
};
