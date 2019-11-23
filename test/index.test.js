const
  {
    expect,
    test,
  } = require('@oclif/test')
const cmd = require('..')

describe('githubFetcher', () => {
  test
  .stdout()
  .do(() => cmd.run(['julian', 'asc']))
  .it('runs julian asc', ctx => {
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .do(() => cmd.run(['julian', 'desc']))
  .it('runs julian desc', ctx => {
    expect(ctx.stdout).to.exist
  })
}
)
