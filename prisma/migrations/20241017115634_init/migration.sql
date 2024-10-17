-- CreateTable
CREATE TABLE "Listaexcusas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Listaexcusas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Listaexcusas_name_key" ON "Listaexcusas"("name");
