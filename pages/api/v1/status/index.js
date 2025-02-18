function status(request, response) {
  response.status(200).json({ chave: "tudo ok, pode preosseguir" });
}

export default status;
