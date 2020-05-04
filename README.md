# Updating Site Pages

This site is built with Jekyll. The quick-start instructions on the
[Jekyll website](https://jekyllrb.com/) show the simplest way to get
going:

    gem install bundler
    cd docs-website
    bundle exec jekyll build --trace

You only need to run `gem install bundler` once. After that, running
`bundle exec` in front of your `jekyll` command keeps your
infrastructure up-to-date.

After building, use BucketExplorer to copy the assembled files from your
`_site` directory to the appropriate place on docs.hortonworks.

# Significant Deletions

Recover last CFM Operator API with:

    git checkout 03ecfae77c4a89eb8609387a086239473399c6b7 -- cfm/master/operator-api
