const fakeUsers = {
  "JohnDoe": {
    password: "1234567A!",
    name: "John Doe",
  },
  "MaggieSmith": {
    password: "7654321Z)",
    name: "Minerva McGonagall"
  }
};

type loginArgs = {
  userName: string;
  password: string;
}

export type loginResult = {
  error?: string;
  user?: {
    userName: string;
    name: string;
  }
}

export async function login({userName, password}: loginArgs):Promise<loginResult> {
  const result = {
    error: null,
    user: null
  };

  if(!fakeUsers[userName]){
    result.error = "Sorry, we have no idea who you are";
    return result
  }

  if(fakeUsers[userName].password !== password) {
    result.error = "Password is incorrect";
  }

  result.user = {
    userName,
    name: fakeUsers[userName].name,
  };

  return result;
}