const {Command, flags} = require('@oclif/command')

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
    const username = args.username
    const sort = args.sort || 'asc'
    this.log(`Searching ${username} github, sorting in ${sort} order`)
  }
}

GithubFetcherCommand.description =
	'Cli tool that fetches Github repositories by username and sorts them by stargazers'

GithubFetcherCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({
    char: 'v',
  }),
  // add --help flag to show CLI version
  help: flags.help({
    char: 'h',
  }),
}

module.exports = GithubFetcherCommand
