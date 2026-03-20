function status(req, res) {
  res.status(200).json({"body":'As coisas estão funcionando!'});
}

export default status;