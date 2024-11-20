import PersonAdd from "./Change_settings";

const BuildPage = (index) => (
  <div>
    <h3>Page {index}</h3>
  </div>
);

const Profile = (message) => {
  return (
    <div>
      <h1>{message} </h1>
      <div>
        <PersonAdd />
      </div>
    </div>
  );
};

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const Settings = () => Profile("Плохо");
