module.exports = {
  dragonTreasure: async (req, res) => {
    const treasure = await req.app.get("db").get_dragon_treasure(1);
    return res.status(200).send(treasure);
  },
  getUserTreasure: async (req, res) => {
    const user = await req.app
      .get("db")
      .get_user_treasure([req.session.user.id]);
    return res.status(200).send(user);
  }
};
