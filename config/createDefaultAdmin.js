const bcrypt = require("bcrypt");
const adminModel = require("../models/admin");

async function createDefaultAdmin() {
  try {
    const existingAdmin = await adminModel.findOne({ email: "dukandaraffan9@gmail.com" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("Affan@7483", 10);
      await adminModel.create({
        name: "Affan",
        phone:7483764561,

        email: "dukandaraffan9@gmail.com",
        password: hashedPassword,
        department:"eee",
        post:"student",
      });
      console.log("✅ Default admin created successfully!");
    } else {
      console.log("ℹ️ Admin already exists.");
    }
  } catch (error) {
    console.error("❌ Error creating default admin:", error);
  }
}

module.exports = createDefaultAdmin;
