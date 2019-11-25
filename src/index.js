const {Command, flags} = require('@oclif/command')
const axios = require('axios')
const {cli} = require('cli-ux')

const printTable = (repos, sort) => {
  cli.table(repos,  {
    name: {
      mindWidth: 10,
    },
    stargazers_count: {},
  }, {
    sort: sort + 'Stargazers count',
  })
}

class GithubFetcherCommand extends Command {
  static args = [{
    name: 'username',
    required: true,
    description: 'Github Username',
    hidden: false,
  },
  {
    name: 'sort',
    required: true,
    description: 'Sorting option',
    hidden: false,
    default: 'asc',
    options: ['asc', 'desc'],
  }];

  async run() {
    const {args} = this.parse(GithubFetcherCommand)
    const {flags} = this.parse(GithubFetcherCommand)
    const username = args.username
    const sort = (args.sort === 'asc') ? '' : '-'
    const url = `https://api.github.com/users/${username}/repos`
    if (flags.verbose) cli.action.start(`Searching ${username} github, sorting in ${args.sort} order`)
    try {
      const {data: repos} = await axios.get(url)
      printTable(repos, sort)
    } catch (error) {
      this.log('Error found please make sure username exists or computer is connected to the internet')
      if (flags.verbose) {
        this.log(error)
      } else {
        this.log('Run the command again with --verbose to see the full error message')
      }
    } finally {
      if (flags.verbose) cli.action.stop()
    }
  }
}

GithubFetcherCommand.description =
	'Cli tool that fetches Github repositories by username and sorts them by stargazers'

GithubFetcherCommand.flags = {
  version: flags.version({
    char: 'v',
  }),
  help: flags.help({
    char: 'h',
  }),
  verbose: flags.boolean({
    default: false,
  }),
}

module.exports = GithubFetcherCommand
