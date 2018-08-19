import {
  authConstant
} from "../../server/constant";
import Jwt from "../../lib/jwt";
import Boom from "boom";
import Bookshelf from "../../db/database";

import {
  isBuffer,
  bufferToBoolean,
  bookshelfError
} from "../../helper/common-helper";

import Accounts from "../../db/model/accounts";

class AuthController {
  constructor() {}

  createAnAccount(request, reply) {
    const {
      username,
      password,
      firstname,
      lastname,
      gender,
      email,
      phone_number,
      birthday,
      universityId,
      type
    } = request.payload;

    if (username === undefined || username === null || password === undefined || password === null) {
      reply(Boom.badRequest("Missing credentials"));
      return;
    }

    // hash password
    const salt = Jwt.generateSalt();
    const hashedPassword = Jwt.hash(password, salt);

    new Accounts().save({
        Username: username,
        Password: hashedPassword,
        Name: firstname + " " + lastname,
        Gender: gender,
        Email: email,
        Phone: phone_number,
        Birthday: birthday,
        University_id: universityId,
        HashSalt: salt,
        Type: type
      }, {
        method: "insert"
      })
      .then((result) => {
        if (result === null) {
          reply(Boom.badRequest("Can not save account"));
          return;
        }

        reply({
          data: result.id,
          message: "Register successfully"
        });
      });
  }

  authorize(request, reply) {
    const {
      username,
      password
    } = request.payload;

    Accounts.where({
        Username: username
      })
      .fetch({
        columns: ["Account_id", "Username", "Password", "Hashsalt", "Name", "University_id"]
      })
      .then((result) => {
        if (result === null) {
          reply(Boom.badRequest(authConstant.userNotFound));
          return;
        }

        const {
          Id,
          UserName,
          Password,
          Hashsalt,
          Name,
          University_id
        } = result.attributes;

        if (Jwt.checkPassword(Password, Hashsalt, password)) {
          // user is valid
          reply({
            data: result,
            message: "Granted"
          });
          return;
        } else {
          reply(Boom.badRequest(authConstant.incorrectPassword));
        }
      });
  }
}

export default new AuthController();