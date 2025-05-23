-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "hits" INTEGER,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "locations_address_key" ON "locations"("address");

