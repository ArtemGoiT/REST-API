import { ONE_DAY } from '../constants/index.js';
import { logotUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUserController(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
export const LoginUserController = async (req, res) => {
  const session = await loginUser(req.body);
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionID', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};
export const logoutUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logotUser(req.cookie.sessionId);
  }
  res.clearCookie('sessionId');
  res.clearCookie('refrehToken');

  res.status(204).send();
};
