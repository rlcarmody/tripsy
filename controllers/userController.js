const User = require('../models/Schema/User');
const auth = require('../auth');
const GRAPH_API_URL = 'https://graph.facebook.com/me?access_token=';
const PICTURE_BASE_URL = 'https://graph.facebook.com/v3.2/';
const axios = require('axios');

module.exports = {
  //post
  findOrCreate(req, res) {
    const { accessToken,
      email,
      id,
      name,
    } = req.body;

    axios.get(`${GRAPH_API_URL}${accessToken}`)
      .then((result) => {
        if (result.data.id === id) {
          User.findOne({ facebookID: id })
            .then((result) => {
              if (!result) {
                User.create({
                  displayName: name,
                  email,
                  facebookID: id,
                  pictureURL: `${PICTURE_BASE_URL}${id}/picture`,
                }).then(result => {
                  const token = auth.generateToken(result._id);
                  res.cookie('accessToken', token, {
                    maxAge: 86400000,
                    httpOnly: true,
                    sameSite: true,
                  }).end();
                })
              } else {
                const token = auth.generateToken(result._id);
                res.cookie('accessToken', token, {
                  maxAge: 86400000,
                  httpOnly: true,
                  sameSite: true,
                }).end();
              }
            })
        }
      });
  },
  //post
  login(req, res) {
   const user = auth.verifyToken(req.cookies);
   const isAuthenticated = !user ? false : true;
   res.json({isAuthenticated});
  },
  logout(req, res) {
    res.cookie('accessToken').end();
  },
  getTrips(req, res) {
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID = user.id;
    User.findById(userID)
      .select('displayName')
      .populate({
        path: 'trips',
        options: {
          sort: 'startDate'
        },
        populate: {
          path: 'organizer',
          select: 'displayName'
        }
      })
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  },
  getUserNameAndPicture(req, res) {
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    User.findById(user.id)
      .select('displayName pictureURL')
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  }
}