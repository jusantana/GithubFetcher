const
  {
    expect,
    test,
  } = require('@oclif/test')
const cmd = require('..')

describe('githubFetcher', () => {
  test
  .stdout()
  .do(() => cmd.run(['Mike', 'asc']))
  .it('runs Mike asc', ctx => {
    expect(ctx.stdout).to.contain('Searching Mike github, sorting in asc order')
  })
})
