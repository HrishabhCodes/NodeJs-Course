const yargs = require("yargs");
const getNotes = require("./notes");

// console.log(process.argv);

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Description: " + argv.description);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note..");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all the notes",
  handler: function () {
    console.log("Listing out all the notes..");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading out a note..");
  },
});

// console.log(yargs.argv);

yargs.parse();
