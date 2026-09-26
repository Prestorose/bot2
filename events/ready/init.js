const mongoose = require("mongoose");
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    console.log(`✅ | ${client.user.tag}`);

    client.user.setPresence({
        activities: [{ name: "Northside APM RP", type: ActivityType.Watching }],
    });

    await mongoose.connect(process.env.MONGOURL);
    console.log("✅ | Connected to DB");
};
