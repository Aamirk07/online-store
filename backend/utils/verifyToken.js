import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['access_token'];
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated!");
  }
};

export const verify = (req, res, next) => {
  verifyToken(req, res, async () => {
    const current = await User.findById(req.user.id);
    if (
      req.user.id === req.params.userId ||
      req.user.id === req.body.userId ||
      current?.isAdmin
    ) {
      next();
    } else {
      res.status(403).json("You are not allowed to perform this change!");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    const current = await User.findById(req.user?.id);
    if (current?.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to perform this change!");
    }
  });
};
