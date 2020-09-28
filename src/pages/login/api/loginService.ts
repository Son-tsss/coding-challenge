const fakeUsers = {
  "johndoe": {
    password: "1234567A!",
    name: "John Doe",
  },
  "maggiesmith": {
    password: "7654321Z)",
    name: "Minerva McGonagall"
  },
  "admin": {
    password: "admin",
    name: "Admin"
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

export async function login({userName, password}: loginArgs): Promise<loginResult> {
  const result = {
    error: null,
    user: null
  };

  const login = userName.toLowerCase();
  if (!fakeUsers[login]) {
    result.error = "Sorry, we have no idea who you are";
    return result
  }

  if (fakeUsers[login].password !== password) {
    result.error = "Password is incorrect";
  }

  result.user = {
    userName: login,
    name: fakeUsers[login].name,
  };

  return result;
}
