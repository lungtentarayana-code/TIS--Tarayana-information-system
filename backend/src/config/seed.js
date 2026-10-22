const Role = require("../models/roleModel");
const User = require("../models/userModel");
const donorPartner = require("../models/donorPartnerModel");
const bcrypt = require("bcrypt");

const ensureRole = async (roleName, roleDescription) => {
  let role = await Role.findOne({ roleName });
  if (!role) {
    role = await Role.create({ roleName, roleDescription });
    console.log(`Created missing role: ${roleName}`);
  }
  return role;
};

const seedDatabase = async () => {

  const roleCount = await Role.countDocuments();

  if (roleCount === 0) {

    const adminRole = await Role.create({
      roleName: "Admin",
      roleDescription: "System administrator"
    });



    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      roleId: adminRole._id,
      email: "admin@gmail.com",
      password: hashedPassword
    });

    console.log("Default roles and admin user created");
  }

  const donorRole = await ensureRole("Donor", "Funding donor organization");
  await ensureRole("Partner", "Implementing partner organization");

  const roleIds = (await Role.find({}, "_id")).map((role) => role._id);
  const orphaned = await donorPartner.updateMany(
    { roleId: { $nin: roleIds } },
    { roleId: donorRole._id }
  );
  if (orphaned.modifiedCount > 0) {
    console.log(`Reassigned ${orphaned.modifiedCount} donor/partner records with missing roles`);
  }

};

module.exports = seedDatabase;