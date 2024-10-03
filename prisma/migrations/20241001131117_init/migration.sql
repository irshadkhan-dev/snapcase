-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "croppedImageUrl" TEXT,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);
