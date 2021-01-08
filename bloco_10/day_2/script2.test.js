const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// describe('Testando promise - getUserName', () => {
//   describe('Quando o usuário é encontrado', () => {
//     test('Retorne usuário', () => {
//       const users = {
//         4: { name: 'Mark' },
//         5: { name: 'Paul' }
//       };
//       expect.assertions(1);
//       return expect(getUserName(4)).resolves.toEqual('Mark')
//     });
//   });

//   describe('Quando o usuário nao é encontrado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return expect(getUserName(6)).rejects.toEqual({ error: 'User with ' + id + ' not found.' })
//     });
//   });
// });

describe('Quando o usuário é encontrado', () => {
  test('Retorne o usuário', () => {
    // expect.assertions(1);
      getUserName(4).then(data => {
      expect(data).toEqual('Mark');
    });
  });
});

describe('Quando o usuário não é encontrado', () => {
  test('Retorne o erro', () => {
    // expect.assertions(1);
      getUserName(4).catch(error => {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' })
    });
  });
});

//async and await
test('Testando com async/await', async () => {
  const data = await getUserName(4);
  expect(data).toEqual('Mark');
});

test('Testando com async/await, testando o reject', async () => {
  try {
    await getUserName(4);
  } catch (error) {
    expect(error).toEqual({ error: 'User with ' + id + ' not found.' })
});

//
// describe('Testando Async/Await - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', async () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ]
//       expect.assertions(1);
//       await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', async () => {
//       expect.assertions(1);
//       await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
//     });
//   });
// });