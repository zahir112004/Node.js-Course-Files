const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create an add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description of the title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body) 
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command:'list',
    describe:'Lists the notes',
    handler:function() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Inputs the data',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)