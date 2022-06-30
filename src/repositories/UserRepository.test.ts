import { UserRepository } from "./UserRepository";
import getEntityManagerMock from "../__mocks__/getEntityManagerMock";
import { v4 as uuid } from "uuid";
import { User } from "../entities/User";

describe("userRepository", () => {
  const mockUser: User = {
    user_id: uuid(),
    name: "nome",
    email: "email@dio.com",
  };

  it("should return an array of users", async () => {
    const managerMock = await getEntityManagerMock({
      saveReturn: mockUser,
    });
    const userRepository = new UserRepository(managerMock);
    const user = await userRepository.save(mockUser);
    expect(user).toHaveProperty("user_id");
    expect(user).toMatchObject({
      name: "nome",
      email: "email@dio.com",
    });
  });
});
