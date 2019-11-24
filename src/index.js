const {Command, flags} = require('@oclif/command')
const axios = require('axios')
const {cli} = require('cli-ux')
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
    const sort = (args.sort === 'asc') ? '' : '-'
    const url = `https://api.github.com/users/${username}/repos`
    cli.action.start(`Searching ${username} github, sorting in ${args.sort} order`)
    const {data: repos} = await axios.get(url)
    cli.action.stop()
    cli.table(repos, {
      name: {
        mindWidth: 10,
      },
      stargazers_count: {},
    }, {
      sort: sort + 'Stargazers count',
    })
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
}

module.exports = GithubFetcherCommand
