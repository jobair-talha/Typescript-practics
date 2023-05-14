type NobDeveloperType = {
  name: string;
};

type JuniorDeveloperType = NobDeveloperType & {
  experience: number;
  expertise: string;
  mobile: string;
  email: string;
};

const newDeveloper: NobDeveloperType | JuniorDeveloperType = {
  name: "talha",
  experience: 1,
  expertise: "web Dev",
  mobile: "01724131321",
  email: "talhajobair10@gmail.com",
};
