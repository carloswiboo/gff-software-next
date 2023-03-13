import prisma from "./../../../lib/prisma";
export default async function handle(req, res) {
  const { nombre, descripcion, status } = req.body;

  if (req.method === "GET") {
    const result = await prisma.puestos.findMany({
      where: {
        status: 1,
      },
    });
    res.json(result);
  }

  else {
   
  }
}
