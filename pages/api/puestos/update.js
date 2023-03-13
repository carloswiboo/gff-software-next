import prisma from "./../../../lib/prisma";

export default async function handle(req, res) {
  const { nombre, descripcion } = req.body;
  const result = await prisma.puestos.update({
    where: {
      id: parseInt(req.query.id),
    },
    data: {
      nombre: nombre,
      descripcion: descripcion,
    },
  });
  console.log(result);
  res.json(result);
}
