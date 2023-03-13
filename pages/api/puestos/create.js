import prisma from "./../../../lib/prisma";
export default async function handle(req, res) {
  const { nombre, descripcion, status } = req.body;
  const result = await prisma.puestos.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
      status: 1,
    },
  });
  res.json(result);
}
